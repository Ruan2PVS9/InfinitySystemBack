'use strict'
const Promotion = use('App/Models/Promotion');


class PromotionController {
  async store({request,auth,params, response}){
    const data = await request.only(['description', 'percentage_discount']);

    const promotion = await Promotion.create(data);

    return promotion
  }
  async index({request,auth,params, response}){
    const promotion = await Promotion.all()

    return promotion

  }
  async show({request,auth,params, response}){
    try {
      const promotion = await Promotion.find(params.id);
      if(promotion){
        return promotion
      }
    } catch (error) {
        console.log(error)
    }
  }
  async update({request,auth,params, response}){
    const promotion = await Promotion.findOrFail(params.id);

    const data = request.only(['description', 'percentage_discount'])

    promotion.merge(data);
    await promotion.save();

    return promotion;
  }
  async destroy({request,auth,params, response}){
    const promotion = await Promotion.find(params.id)
    await promotion.delete()
  }


}

module.exports = PromotionController
