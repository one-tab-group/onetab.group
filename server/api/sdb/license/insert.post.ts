import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let [data, message] = [null, null]

  try {
    const res = await sdb.license.insert(body)
    if (res && res.length === 1) {
      data = res[0]
    }
  } catch (err) {
    console.log(err)
    message = err
  }

  return {
    data,
    error: !!message,
    message
  }
})
