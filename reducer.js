
const init = {
    
}

const actions = {

}

export default function reducer(state, action, args) {
    // Nếu actions có action thì sẽ chạy actions[action](state, action, args), nếu kg có thì vẫn return ra state
    actions[action] && actions[action](state, ...args)
    return state
}