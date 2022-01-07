import axios from 'axios'

const API_URL = 'https://node-url-speedio.herokuapp.com/url'

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
            console.error(err)
            return []
        }
    }

    async top100() {
        try {
            const resp = await axios.get(API_URL + '/top100')
            return resp.data
        } catch (err) {
            console.error(err)
            return []
        }
    }

    async incrementarClick(id) {
        try {
            const resp = await axios.get(API_URL + '/view/' + id)
            return resp.data
        } catch (err) {
            return err
        }
    }

    async deletar(id) {
        try {
            const resp = await axios.delete(API_URL + '/' + id)
            return resp.data
        } catch (err) {
            return err
        }
    }
}

export default new UrlService()