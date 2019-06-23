'use strict';

/**
 * Actionitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Actionitem`.
 */

module.exports = {

  /**
   * Retrieve actionitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.actionitem.search(ctx.query);
    } else {
      return strapi.services.actionitem.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a actionitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.actionitem.fetch(ctx.params);
  },

  /**
   * Count actionitem records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.actionitem.count(ctx.query, populate);
  },

  /**
   * Create a/an actionitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.actionitem.add(ctx.request.body);
  },

  /**
   * Update a/an actionitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.actionitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an actionitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.actionitem.remove(ctx.params);
  }
};
