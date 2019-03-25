import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://a6b3555e.ngrok.io`
  })
}
