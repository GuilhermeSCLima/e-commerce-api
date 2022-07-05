const middlewares = {

  async authenticate(req, res, next){

    const { authentication } = req.headers
    const { user_id } = req.params

    if(!authentication) return res.status(401).json({message: 'Token not found'})
    if(authentication !== user_id) return res.status(401).json({message: 'Unauthorized'})

    next()

  }

}

module.exports = middlewares