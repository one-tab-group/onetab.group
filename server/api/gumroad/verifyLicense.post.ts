import axios from '~/utils/http'

export default defineEventHandler(async (event) => {
  const { license_key } = await readBody(event)
  let [res, message] = [null, null]

  console.log(license_key)

  // const gumroadUrl = `https://api.gumroad.com/v2/licenses/verify?product_permalink=otg&license_key=${license_key}`

  try {
    res = await axios.post('https://api.gumroad.com/v2/licenses/verify', {
      product_permalink: 'otg',
      license_key
    })
    console.log(res)
  } catch (err) {
    console.log(err)
    message = err
  }

  return {
    res,
    data: res,
    error: !!message,
    message
  }
})
