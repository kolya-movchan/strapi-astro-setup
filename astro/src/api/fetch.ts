import axios from 'axios'

export const BASE_URL = 'http://localhost:1337'

export const { data } = await axios
  .get(`${BASE_URL}/api/cats?populate=%2A`)
  .then(response => response.data)
