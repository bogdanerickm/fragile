'use strict';

/**
 * Acceptancecriteria.js controller
 *
 * @description: A set of functions called "actions" for managing `Acceptancecriteria`.
 */

module.exports = {

  /**
   * Retrieve acceptancecriteria records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.acceptancecriteria.search(ctx.query);
    } else {
      return strapi.services.acceptancecriteria.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a acceptancecriteria record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.acceptancecriteria.fetch(ctx.params);
  },

  /**
   * Count acceptancecriteria records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.acceptancecriteria.count(ctx.query, populate);
  },

  /**
   * Create a/an acceptancecriteria record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.acceptancecriteria.add(ctx.request.body);
  },

  /**
   * Update a/an acceptancecriteria record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.acceptancecriteria.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an acceptancecriteria record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.acceptancecriteria.remove(ctx.params);
  }
};
