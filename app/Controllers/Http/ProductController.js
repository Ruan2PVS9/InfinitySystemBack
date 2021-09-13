'use strict'

const Product = use('App/Models/Product')
class ProductController {
  async store({request,auth,params, response}){
    const data = await request.only(['name', 'custo', 'preco', 'qtd_estoque', 'image', 'promotion_id']);

    const product = await Product.create(data);

    return product
  }
  async index({request,auth,params, response}){
    const product = await Product.all()

    return product

  }
  async show({request,auth,params, response}){
    try {
      const product = await Product.find(params.id);
      if(product){
        return product
      }
    } catch (error) {
        console.log(error)
    }
  }
  async update({request,auth,params, response}){
    const product = await Product.findOrFail(params.id);

    const data = request.only(['nome', 'preco', 'qtdeestoque', 'image', 'promotion_id'])

    product.merge(data);
    await product.save();

    return product;
  }
  async destroy({request,auth,params, response}){
    const product = await Product.find(params.id)
    await product.delete()
  }
}

module.exports = ProductController
