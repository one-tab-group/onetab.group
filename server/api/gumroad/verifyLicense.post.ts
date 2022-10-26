import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { license_key } = await readBody(event)
  let [res, message] = [null, null]

  console.log(license_key)

  const gumroadUrl = `https://api.gumroad.com/v2/licenses/verify?product_permalink=otg&license_key=${license_key}`

  try {
    res = await axios.post(gumroadUrl)
  } catch (err) {
    console.log(err)
    message = err
  }

  return {
    data: res.data,
    error: !!message,
    message
  }
})
