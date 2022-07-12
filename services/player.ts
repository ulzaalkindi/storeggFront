import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export async function getFeaturedGame() {
  const URL = 'players'

  const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`)
  const axiosResponse = response.data

  return axiosResponse.data
}

export async function getDetailVoucher(id) {
  const URL = `players/${id}/detail`

  const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`)
  const axiosResponse = response.data

  return axiosResponse.data
}
