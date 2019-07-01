'use strict';

/**
 * Developerdedication.js controller
 *
 * @description: A set of functions called "actions" for managing `Developerdedication`.
 */

module.exports = {

  /**
   * Retrieve developerdedication records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.developerdedication.search(ctx.query);
    } else {
      return strapi.services.developerdedication.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a developerdedication record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.developerdedication.fetch(ctx.params);
  },

  /**
   * Count developerdedication records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.developerdedication.count(ctx.query, populate);
  },

  /**
   * Create a/an developerdedication record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.developerdedication.add(ctx.request.body);
  },

  /**
   * Update a/an developerdedication record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.developerdedication.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an developerdedication record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.developerdedication.remove(ctx.params);
  }
};
