'use strict'


const Order = use('App/Models/Order')

class OrderController {

  async store({request,auth,params, response}){
    const {products, ...data} = await request.only(['products', 'user_id','payment_id','status_id']);

    const order = await Order.create(data);

    if (products && products.length > 0){
      await order.products().attach(products)
      await order.load('products')
    }

    return order
  }
  async index({request,auth,params, response}){
    const order = await Order.query().where('user_id',auth.user.id).with('products').fetch()

    return order

  }
  async show({request,auth,params, response}){
    try {
      const order = await Order.find(params.id)
      if(order){

        await order.load('products');
        return order
      }
    } catch (error) {
        console.log(error)
    }
  }
  async update({request,auth,params, response}){
    const order = await Order.findOrFail(params.id);

    const data = request.only(['productss', 'users','payments','statuses'])

    order.merge(data);
    await order.save();

    if (products && Products.length > 0){
      await order.products().detach()
      await order.products().attach(products)
      await order.load('products')
    }


    return order;
  }
  async destroy({request,auth,params, response}){
    const order = await Order.find(params.id)
    await order.delete()
  }
}

module.exports = OrderController
