'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
// const Model = use('CoreApp/Model/ModelBase')
// import { manyToMany, ManyToMany, BaseModel } from '@ioc:Adonis/Lucid/Orm'
// import Product from './Product'

class Order extends Model {

  payments(){
    return this.hasOne('App/Models/Payment')
  }
  users(){
    return this.hasMany('App/Models/User')
  }
  Statuses(){
    return this.hasOne('App/Models/Status')
  }
  products(){
    return this.belongsToMany('App/Models/Product' /*,'product_id','order_id'*/)
  }

  // @manyToMany(()=> Product)
  // public products: ManyToMany<typeof Product>

}

module.exports = Order
