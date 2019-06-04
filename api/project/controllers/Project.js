'use strict';

/**
 * Project.js controller
 *
 * @description: A set of functions called "actions" for managing `Project`.
 */

module.exports = {

  /**
   * Retrieve project records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.project.search(ctx.query);
    } else {
      return strapi.services.project.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a project record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.project.fetch(ctx.params);
  },

  /**
   * Count project records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.project.count(ctx.query, populate);
  },

  /**
   * Create a/an project record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.project.add(ctx.request.body);
  },

  /**
   * Update a/an project record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.project.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an project record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.project.remove(ctx.params);
  }
};
