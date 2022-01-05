import axios from 'axios'

const API_URL = 'http://localhost:3001/user'

class AuthService {
  register(user) {
    return axios.post(API_URL + '/registrar', {
      nome: user.nome,
      email: user.email,
      senha: user.senha
    })
  }

  login(user) {
    return axios
      .post(API_URL + '/logar', {
        nome: user.nome,
        senha: user.senha
      })
      .then(resp => {
        if (resp.data.accessToken) localStorage.setItem('user', JSON.stringify(resp.data))
        return resp.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }
}

export default new AuthService()
