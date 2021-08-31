'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PromotionSchema extends Schema {
  up () {
    this.create('promotions', (table) => {
      table.increments('id').primary()
      table.string('description',255).notNullable().unique()
      table.float('percentage_discount').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('promotions')
  }
}

module.exports = PromotionSchema
