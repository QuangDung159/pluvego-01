import logger from "redux-logger"
const { createStore, applyMiddleware } = require("redux")
const { default: Root } = require("./reducers/Root")

const store = createStore(Root, applyMiddleware(logger))

export default store
