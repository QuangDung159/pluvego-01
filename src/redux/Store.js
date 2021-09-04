const { createStore } = require("redux")
const { default: Root } = require("./reducers/Root")

const store = createStore(Root)
store.subscribe(() => {
  console.log("STORE UPDATED: ", store.getState())
})

export default store
