'use strict';

/**
 * Userstory.js controller
 *
 * @description: A set of functions called "actions" for managing `Userstory`.
 */

module.exports = {

  /**
   * Retrieve userstory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.userstory.search(ctx.query);
    } else {
      return strapi.services.userstory.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a userstory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.userstory.fetch(ctx.params);
  },

  /**
   * Count userstory records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.userstory.count(ctx.query, populate);
  },

  /**
   * Create a/an userstory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userstory.add(ctx.request.body);
  },

  /**
   * Update a/an userstory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userstory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userstory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userstory.remove(ctx.params);
  }
};
