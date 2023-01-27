import axios from '~/utils/http'
import api from '~/utils/lemonAPI'
import { AnyRecord } from '~/types'

interface VerifyRes {
  valid: boolean
  error: string
  license_key: AnyRecord
  instance: AnyRecord | null
  meta: AnyRecord
}

interface LicenseKeyRes {
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
    res = await api.post(reqURL)
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
  let res = {} as LicenseKeyRes

  try {
    res = await api.get(reqURL)
  } catch (error) {
    console.log(error)
  }

  return res
}

export default defineEventHandler(async (event) => {
  const { license_key } = await readBody(event)
  let res = null
  let message = null

  // console.log(license_key)
  const verifyInfo = await verifyLicense(license_key)
  // console.log(verifyInfo)

  if (verifyInfo && verifyInfo.valid) {
    const licenseId = verifyInfo.license_key.id
    const licenseInfo = await getLicense(licenseId)
    res = licenseInfo.data
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
