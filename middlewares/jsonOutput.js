export default {
  after: (handler, next) => {
    if (handler.response && handler.response.body) 
      handler.response.body = JSON.stringify(handler.response.body, null, 1)
    next()
  }
}