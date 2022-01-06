
export const alerta = {
    namespaced: true,
    state: {
        itens: []
    },
    actions: {
        criar({ commit }, item) {
            commit('criarAlerta', item)
        },
        remover({ commit }, item) {
            commit('removerAlerta', item)
        },
    },
    mutations: {
        criarAlerta(state, item) {
            item.id = Date.now()
            state.itens.push(item)
        },
        removerAlerta(state, item) {
            let i = state.itens.indexOf(item)
            if (i > -1) state.itens.splice(i, 1)
        },
    }
}
