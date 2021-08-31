'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments('id').primary()
      table.string('name',255).notNullable().unique()
      table.float('custo')
      table.float('preco')
      table.integer('qtd_estoque')
      table.string('image').notNullable()
      table.integer('promotion_id').unsigned().notNullable().references('id').inTable('promotions').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
