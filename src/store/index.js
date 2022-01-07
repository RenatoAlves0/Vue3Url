import { createStore } from 'vuex'
import { auth } from './auth'
import { alerta } from './alerta'
import { url } from './url'

const store = createStore({
  modules: {
    auth,
    alerta,
    url
  },
})

export default store
