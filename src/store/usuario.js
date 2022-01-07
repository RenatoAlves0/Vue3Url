import UsuarioService from '../services/usuario'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { user: user } : { user: null }

export const usuario = {
  namespaced: true,
  state: initialState,
  actions: {
    entrar({ commit }, user) {
      return UsuarioService.entrar(user).then(
        user => {
          commit('entrarOk', user)
          return Promise.resolve(user)
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
    },

    registrar({ commit }, user) {
      return UsuarioService.registrar(user).then(
        response => {
          return Promise.resolve(response.data)
        },
        error => {
          return Promise.reject(error)
        }
      )
    }
  },

  mutations: {
    entrarOk(state, user) {
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
