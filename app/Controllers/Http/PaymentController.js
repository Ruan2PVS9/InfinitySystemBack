'use strict';
const Payment = use('App/Models/Payment.js');
const User = use('App/Models/User')
class PaymentController {

  async store({request,auth,params, response}){
    const data = await request.only(['description']);

    const payment = await Payment.create(data);

    return payment
  }
  async index({request,auth,params, response}){
    const payment = await Payment.all()

    return payment

  }
  async show({request,auth,params, response}){
    try {
      const payment = await Payment.find(params.id);
      if(payment){
        return payment
      }
    } catch (error) {
        console.log(error)
    }
  }
  async update({request,auth,params, response}){
    const payment = await Payment.findOrFail(params.id);

    const data = request.only(['description'])

    payment.merge(data);
    await payment.save();

    return payment;
  }
  async destroy({request,auth,params, response}){
    const payment = await Payment.find(params.id)
    await payment.delete()
  }


}

module.exports = PaymentController
