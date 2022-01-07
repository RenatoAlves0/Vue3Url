import UrlService from '../services/url'

export const url = {
    namespaced: true,
    state: { urls: [], top100: [] },
    actions: {
        salvar({ commit }, url) {
            return UrlService.salvar(url).then(
                url => {
                    return Promise.resolve(url)
                },
                error => {
                    return Promise.reject(error)
                }
            )
        },

        async listar({ commit }) {
            await UrlService.listar()
                .then(
                    urls => {
                        commit('atualizarUrls', urls)
                        return Promise.resolve(urls)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
            await UrlService.top100()
                .then(
                    top100 => {
                        commit('atualizarTop100', top100)
                        return Promise.resolve(top100)
                    },
                    error => {
                        return Promise.reject(error)
                    }
                )
        },
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
