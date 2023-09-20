import axios, { type AxiosResponse } from 'axios'
import type { APIresponse } from 'src/types/Cat'

export const BASE_URL = 'http://127.0.0.1:1337'

export const getCats = async (): Promise<APIresponse | null> => {
  try {
    const data: AxiosResponse<APIresponse | null> = await axios.get(
      `${BASE_URL}/api/cats?populate=%2A`
    )

    return data.data
  } catch {
    return null
  }
}
