const REQUEST_INPUT = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET'
}

const VERCEL_HOST = 'https://metafy.vercel.app/api'
const NETLIFY_HOST = 'https://get-metafy.netlify.app/.netlify/functions/api'

export default defineEventHandler(async (event) => {
  const { url } = await getQuery(event)
  let [res, message] = [{ message: '', success: false }, null]

  console.log(url)

  const vercelRes = () => fetch(`${VERCEL_HOST}?url=${url}`, REQUEST_INPUT)
  const netlifyRes = () => fetch(`${NETLIFY_HOST}?url=${url}`, REQUEST_INPUT)

  const result = await Promise.race([vercelRes(), netlifyRes()])

  res = await result.json()

  event.node.res.setHeader('Content-Type', 'application/json')

  return {
    data: res,
    error: !!message,
    message
  }
})
