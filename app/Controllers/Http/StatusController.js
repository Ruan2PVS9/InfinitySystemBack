'use strict'
const Status = use('App/Models/Status')
class StatusController {
  async store({request,auth,params, response}){
    const data = await request.only(['status']);

    const status = await Status.create(data);

    return status
  }
  async index({request,auth,params, response}){
    const status = await Status.all()

    return status

  }
  async show({request,auth,params, response}){
    try {
      const status = await Status.find(params.id);
      if(status){
        return status
      }
    } catch (error) {
        console.log(error)
    }
  }
  async update({request,auth,params, response}){
    const status = await Status.findOrFail(params.id);

    const data = request.only(['status'])

    status.merge(data);
    await status.save();

    return status;
  }
  async destroy({request,auth,params, response}){
    const status = await Status.find(params.id)
    await status.delete()
  }

}

module.exports = StatusController
