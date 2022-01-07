import axios from 'axios'

const API_URL = 'https://node-url-speedio.herokuapp.com/'

class UserService {
    getUser() {
        let user = JSON.parse(localStorage.getItem('user'))
        let token = {}
        if (user && user.accessToken) token = { 'x-access-token': user.accessToken }
        return axios.get(API_URL + 'user/verificar_token', { headers: token })
    }
}

export default new UserService()