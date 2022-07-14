/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import callAPI from '../config'
import { LoginTypes } from './data-types'

const API_URL = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export async function setSignUp(data: FormData) {
  const url = `${API_URL}/${API_VERSION}/auth/register`
  return callAPI({
    url,
    method: 'POST',
    data,
  })
}
export async function setLogin(data: LoginTypes) {
  const url = `${API_URL}/${API_VERSION}/auth/login`
  return callAPI({
    url,
    method: 'POST',
    data,
  })
}
