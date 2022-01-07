import UrlService from '../services/url'

export const url = {
    namespaced: true,
    state: { urls: [], top100: [] },
    actions: {
        salvar({ commit }, url) {
            return UrlService.salvar(url).then(
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
                        commit('atualizarUrls', x)
                        return Promise.resolve(x)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
            await UrlService.top100()
                .then(
                    x => {
                        commit('atualizarTop100', x)
                        return Promise.resolve(x)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
        },

        async incrementarClick({ commit }, id) {
            return UrlService.incrementarClick(id).then(
                x => {
                    return Promise.resolve(x)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        },

        async deletar({ commit }, id) {
            return UrlService.deletar(id).then(
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
        atualizarUrls(state, urls) {
            state.urls = urls
        },
        atualizarTop100(state, top100) {
            state.top100 = top100
        },
    }
}
