'use strict';

/**
 * Sprint.js controller
 *
 * @description: A set of functions called "actions" for managing `Sprint`.
 */

module.exports = {

  /**
   * Retrieve sprint records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.sprint.search(ctx.query);
    } else {
      return strapi.services.sprint.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a sprint record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.sprint.fetch(ctx.params);
  },

  /**
   * Count sprint records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.sprint.count(ctx.query, populate);
  },

  /**
   * Create a/an sprint record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sprint.add(ctx.request.body);
  },

  /**
   * Update a/an sprint record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sprint.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sprint record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sprint.remove(ctx.params);
  }
};
