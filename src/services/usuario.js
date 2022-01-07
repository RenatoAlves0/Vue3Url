import axios from 'axios'

const API_URL = 'https://node-url-speedio.herokuapp.com/user'

class UsuarioService {
    // validarToken() {
    //     let user = JSON.parse(localStorage.getItem('/'))
    //     let token = {}
    //     if (user && user.accessToken) token = { 'x-access-token': user.accessToken }
    //     return axios.get(API_URL + 'user/verificar_token', { headers: token })
    // }

    registrar(user) {
        return axios.post(API_URL + '/registrar', {
            nome: user.nome,
            email: user.email,
            senha: user.senha
        })
    }

    async entrar(user) {
        const resp = await axios
            .get(API_URL + '/logar', {
                params: {
                    email: user.email,
                    senha: user.senha
                }
            })
        if (resp.data.accessToken)
            localStorage.setItem('user', JSON.stringify(resp.data))
        return resp.data
    }

    sair() {
        localStorage.removeItem('user')
    }
}

export default new UsuarioService()