'use strict'

const User = use("App/Models/User")

class UserController {

  async show({request,auth,response,params}){
    // const user = await User.findOrFail(params.id);

    // return user

    try {
      const user = await User.find(params.id);
      if(user){
        return user
      }
    } catch (error) {
        console.log(error)
    }
  }
  async update({request, auth, params}){
    const user = await User.findOrFail(params.id);

    const data = request.only(['email','telephone','username'])

    user.merge(data);
    await user.save();

    return user;
  }
  async destroy({request, auth , params ,response}){
    const user = await User.findOrFail(params.id)

  if (user.id !== auth.user.id) {
    return response.status(401).send({ error: 'Not authorized' })
  }

  await user.delete()

  }


}

module.exports = UserController
