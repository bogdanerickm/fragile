'use strict';

/**
 * Retrospective.js controller
 *
 * @description: A set of functions called "actions" for managing `Retrospective`.
 */

module.exports = {

  /**
   * Retrieve retrospective records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.retrospective.search(ctx.query);
    } else {
      return strapi.services.retrospective.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a retrospective record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.retrospective.fetch(ctx.params);
  },

  /**
   * Count retrospective records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.retrospective.count(ctx.query, populate);
  },

  /**
   * Create a/an retrospective record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.retrospective.add(ctx.request.body);
  },

  /**
   * Update a/an retrospective record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.retrospective.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an retrospective record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.retrospective.remove(ctx.params);
  }
};
