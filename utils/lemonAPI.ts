const API_BASE_URL = 'https://api.lemonsqueezy.com/v1'
const env = useRuntimeConfig()

const request = async (method: string, route: string) => {
  // console.log(`${API_BASE_URL}/${route}`)
  const response = await fetch(`${API_BASE_URL}/${route}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${env.public.LEMON_KEY}`
    },
    method
  })
  const contentType = response.headers.get('content-type')
  if (!contentType || !contentType.includes('json')) {
    throw new TypeError("Oops, we haven't got JSON!")
  }
  return await response.json()
}

export default {
  post: (route: string) => request('POST', route),
  get: (route: string) => request('GET', route)
}
