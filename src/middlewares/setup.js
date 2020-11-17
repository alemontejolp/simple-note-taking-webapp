function set_api_obj(req, res, next) {
  req.api = {}
  next()
}

module.exports = {
  set_api_obj
}
