import axios from 'axios'

const API_URL = 'http://localhost:3001/'

class UserService {
    getUser() {
        let user = JSON.parse(localStorage.getItem('user'))
        let token = {}
        if (user && user.accessToken) token = { 'x-access-token': user.accessToken }
        return axios.get(API_URL + 'user/verificar_token', { headers: token })
    }
}

export default new UserService()