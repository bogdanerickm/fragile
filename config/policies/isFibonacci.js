'use strict';

/**
 * `isFibonacci` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  if (ctx.request.body.story_points && !["1", "2", "3", "5", "8", "13"].find(x => x == ctx.request.body.story_points))
    ctx.badRequest("Invalid story points value: " + ctx.request.body.story_points)
  await next();
};
