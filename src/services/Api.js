import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://train-sc-server.herokuapp.com/`
  })
}
