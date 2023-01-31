import api from '~/utils/lemonAPI'
import { AnyRecord } from '~/types'

interface VerifyRes {
  valid: boolean
  error: string
  license_key: AnyRecord
  instance: AnyRecord | null
  meta: AnyRecord
}

interface LemonAPIData {
  jsonapi: AnyRecord
  links: AnyRecord
  data: {
    type: string
    id: string
    attributes: AnyRecord
    relationships: AnyRecord
    links: AnyRecord
  }
}

/**
 * Step 1. verify the license
 * @param licenseKey
 * @returns
 */
const verifyLicense = async (licenseKey: string) => {
  const reqURL = `licenses/validate?license_key=${licenseKey}`
  let res = {} as VerifyRes

  try {
    res = await api.post<VerifyRes>(reqURL)
  } catch (error) {
    console.log(error)
  }

  return res
}

/**
 * Step 2. get the license
 * @param licenseId
 * @returns
 */
const getLicense = async (licenseId: number) => {
  const reqURL = `license-keys/${licenseId}`
  let res = {} as LemonAPIData

  try {
    res = await api.get<LemonAPIData>(reqURL)
  } catch (error) {
    console.log(error)
  }

  return res
}

/**
 * Step 3. get the order
 * @param licenseId
 * @returns
 */
const getOrder = async (orderId: number) => {
  const reqURL = `orders/${orderId}`
  let res = {} as LemonAPIData

  try {
    res = await api.get<LemonAPIData>(reqURL)
  } catch (error) {
    console.log(error)
  }

  return res
}

const getRecurrence = (variantId: number) => {
  const variantMap = {
    38360: 'monthly',
    38361: 'lifetime',
    38635: 'yearly'
  } as Record<number, string>

  return variantMap[variantId]
}

export default defineEventHandler(async (event) => {
  const { license_key } = await readBody(event)
  const env = useRuntimeConfig()

  let res = null
  let message = null

  const verifyInfo = await verifyLicense(license_key)

  if (verifyInfo && verifyInfo.valid) {
    const licenseRes = await getLicense(verifyInfo.license_key.id)
    const licenseInfo = licenseRes.data.attributes
    const orderRes = await getOrder(licenseInfo.order_id)

    res = {
      ...licenseInfo,
      ...verifyInfo.license_key,
      ...verifyInfo.meta,
      ...orderRes.data.attributes,
      recurrence: getRecurrence(verifyInfo.meta.variant_id)
    }
    // console.log(orderRes)
  } else {
    message = verifyInfo.error
  }

  // console.log(res)

  event.node.res.setHeader('Content-Type', 'application/json')

  return {
    data: res,
    error: !!message,
    message
  }
})
