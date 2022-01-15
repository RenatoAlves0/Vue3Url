import UrlService from '../services/url'

export const url = {
    namespaced: true,
    state: { urls: [], top100: [] },
    actions: {
        async salvar({ commit }, url) {
            return await UrlService.salvar(url).then(
                x => {
                    return Promise.resolve(x)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        },
        async listar({ commit }) {
            await UrlService.listar()
                .then(
                    x => {
                        commit('listarUrlsSucesso', x)
                        return Promise.resolve(x)
                    },
                    error => {
                        commit('listarUrlsFalha')
                        return Promise.reject(error)
                    }
                )
            await UrlService.top100()
                .then(
                    x => {
                        commit('listarTop100Sucesso', x)
                        return Promise.resolve(x)
                    },
                    error => {
                        commit('listarTop100Falha')
                        return Promise.reject(error)
                    }
                )
        },
        async incrementarClick({ commit }, id) {
            return await UrlService.incrementarClick(id).then(
                x => {
                    return Promise.resolve(x)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        },
        async deletar({ commit }, id) {
            return await UrlService.deletar(id).then(
                x => {
                    return Promise.resolve(x)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        listarUrlsSucesso(state, urls) {
            state.urls = urls
        },
        listarUrlsFalha(state) {
            state.urls = []
        },
        listarTop100Sucesso(state, top100) {
            state.top100 = top100
        },
        listarTop100Falha(state) {
            state.top100 = []
        },
    }
}
