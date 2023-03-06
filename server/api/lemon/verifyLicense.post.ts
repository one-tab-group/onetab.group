import api from '~/utils/lemonAPI'
import { AnyRecord } from '~/types'

interface VerifyRes {
  valid: boolean
  error: string
  license_key: AnyRecord
  instance: AnyRecord | null
  meta: AnyRecord
}

type LemonReturnData = {
  type: string
  id: string
  attributes: AnyRecord
  relationships: AnyRecord
  links: AnyRecord
}

interface LemonAPIData {
  jsonapi: AnyRecord
  links: AnyRecord
  data: LemonReturnData
}
interface LemonAPIDataList {
  meta: {
    page: {
      currentPage: number
      from: number
      to: number
      lastPage: number
      perPage: number
      total: number
    }
  }
  jsonapi: AnyRecord
  links: AnyRecord
  data: LemonReturnData[]
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

/**
 * Step 4. get the subscrption
 * @param licenseId
 * @returns
 */
const getSubData = async (productId: number, orderId: number) => {
  const reqURL = `subscriptions/?filter[product_id]=${productId}&filter[order_id]=${orderId}`
  let res = {} as LemonAPIDataList
  let subData: AnyRecord = {}

  try {
    res = await api.get<LemonAPIDataList>(reqURL)
  } catch (error) {
    console.log(error)
  }

  if (res.data && res.data.length > 0 && res.meta.page.total === 1) {
    subData = res.data[0].attributes
  }

  return subData
}

const getRecurrence = (variantId: number) => {
  const variantMap = {
    // lemon
    38360: 'monthly',
    38361: 'lifetime',
    38635: 'yearly',
    // gumroad
    39816: 'monthly',
    39817: 'lifetime'
  } as Record<number, string>

  return variantMap[variantId]
}

export default defineEventHandler(async (event) => {
  const { license_key } = await readBody(event)

  let res = null
  let message = null

  const verifyInfo = await verifyLicense(license_key)

  if (verifyInfo && verifyInfo.valid) {
    let subData = {}
    const licenseRes = await getLicense(verifyInfo.license_key.id)
    const licenseInfo = licenseRes.data.attributes
    const orderRes = await getOrder(licenseInfo.order_id)

    // subscrption on lemon
    if (/38360|38635/.test(verifyInfo.meta.variant_id)) {
      subData = await getSubData(licenseInfo.product_id, licenseInfo.order_id)
    }

    res = {
      ...licenseInfo,
      ...verifyInfo.license_key,
      ...verifyInfo.meta,
      ...orderRes.data.attributes,
      ...subData,
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
