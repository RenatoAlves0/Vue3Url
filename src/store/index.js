import { createStore } from 'vuex'
import { usuario } from './usuario'
import { alerta } from './alerta'
import { url } from './url'

const store = createStore({
  modules: {
    usuario,
    alerta,
    url
  },
})

export default store
