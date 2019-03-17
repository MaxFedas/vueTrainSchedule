import Api from '@/services/Api'

export default {
  getTrains (params) {
    return Api().post('post-trains', {params})
  }
}
