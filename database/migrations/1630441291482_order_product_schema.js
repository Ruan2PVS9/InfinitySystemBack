'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderProductSchema extends Schema {
  up () {
    this.create('order_products', (table) => {
      table.integer('order_id').unsigned().notNullable().references('id').inTable('orders').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('product_id').unsigned().notNullable().references('id').inTable('products').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_products')
  }
}

module.exports = OrderProductSchema
