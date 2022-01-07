import UsuarioService from '../services/usuario'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { user: user } : { user: null }

export const usuario = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return UsuarioService.login(user).then(
        user => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        error => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },

    logout({ commit }) {
      UsuarioService.logout()
      commit('logout')
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
    loginSuccess(state, user) {
      state.user = user
    },
    loginFailure(state) {
      state.user = null
    },
    logout(state) {
      state.user = null
    }
  }
}
