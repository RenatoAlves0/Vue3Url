import axios from 'axios'

const API_URL = 'http://localhost:3001/url'

class UrlService {
    async salvar(url) {
        const resp = await axios.post(API_URL + '/',
            url.user ? {
                big: url.big,
                user: url.user
            } : {
                big: url.big
            })
        return resp.data
    }

    async listar() {
        try {
            const resp = await axios.get(API_URL + '/')
            return resp.data
        } catch (err) {
            console.log(err)
            return []
        }
    }

    async top100() {
        try {
            const resp = await axios.get(API_URL + '/top100')
            return resp.data
        } catch (err) {
            console.log(err)
            return []
        }
    }

    incrementarClick() {

    }

    deletar() {

    }
}

export default new UrlService()