import UsuarioService from '../services/usuario'

const user = JSON.parse(localStorage.getItem('user'))

export const usuario = {
  namespaced: true,
  state: user ? { user: user } : { user: null },
  actions: {
    async registrar({ commit }, user) {
      return await UsuarioService.registrar(user).then(
        x => {
          return Promise.resolve(x.data)
        },
        error => {
          return Promise.reject(error)
        }
      )
    },
    async entrar({ commit }, user) {
      return await UsuarioService.entrar(user).then(
        x => {
          commit('entrarSucesso', x)
          return Promise.resolve(x)
        },
        error => {
          commit('entrarFalha')
          return Promise.reject(error)
        }
      )
    },
    sair({ commit }) {
      UsuarioService.sair()
      commit('sair')
    }
  },

  mutations: {
    entrarSucesso(state, user) {
      state.user = user
    },
    entrarFalha(state) {
      state.user = null
    },
    sair(state) {
      state.user = null
    }
  }
}
