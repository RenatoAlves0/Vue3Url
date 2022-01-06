import { createStore } from 'vuex'
import { auth } from './auth'
import { alerta } from './alerta'

const store = createStore({
  modules: {
    auth,
    alerta
  },
})

export default store
