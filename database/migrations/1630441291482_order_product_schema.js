'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up () {
    this.create('order_product', (table) => {
      table.increments()
      table.integer('order_id').unsigned().notNullable().references('orders.id').onUpdate('CASCADE').onDelete('CASCADE').index('order_id')
      table.integer('product_id').unsigned().notNullable().references('products.id').onUpdate('CASCADE').onDelete('CASCADE').index('product_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_product')
  }
}

module.exports = OrderProductSchema
