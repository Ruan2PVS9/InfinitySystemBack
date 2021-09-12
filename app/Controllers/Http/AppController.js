'use strict'
const User = use('App/Models/User')
class AppController {

  async register({ request }){
    const data = request.only(['username', 'email','password','name','cpf','telephone','birth','permission'])

    const user = await User.create(data)

    return user

  }
  async authenticate({request, auth}){
    const {email, password} = request.all()

    const token = await auth.attempt(email,password)

    return token
  }

}

module.exports = AppController
