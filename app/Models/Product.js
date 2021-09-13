'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
// const Model = use('CoreApp/Model/ModelBase')
// const Model = use('CoreApp/Model/ModelBase')

class Product extends Model {

  orders(){
    return this.belongsToMany('App/Models/Order'/*,'order_id','product_id'*/)
    // return this.belongToMany('App/Models/Product' ,'produc_id','order_id','id','id')

  }
  promotions(){
    return this.hasOne('App/Models/Promotion','id','product_id')
  }
}

module.exports = Product
