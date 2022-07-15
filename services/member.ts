import callAPI from '../config';

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberOverview() {
  const url = `${API_URL}/${API_VERSION}/players/dashboard`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getMemberTransactions() {
  const url = `${API_URL}/${API_VERSION}/players/history`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
