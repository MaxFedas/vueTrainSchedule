import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://b7e4be38.ngrok.io`
  })
}
