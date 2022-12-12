export default defineEventHandler(async (event) => {
  const { license_key } = await readBody(event)
  let [res, message] = [{ message: '', success: false }, null]

  // console.log(license_key)
  const response = await fetch(
    `https://api.gumroad.com/v2/licenses/verify?product_permalink=otg&license_key=${license_key}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  )

  res = await response.json()
  // console.log(res)

  if (res !== null && !res?.success) {
    const lifetime = await fetch(
      `https://api.gumroad.com/v2/licenses/verify?product_permalink=otg_lifetime&license_key=${license_key}`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    res = await lifetime.json()
  }

  event.node.res.setHeader('Content-Type', 'application/json')

  return {
    data: res,
    error: !!message,
    message
  }
})
