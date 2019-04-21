const { hasPermission } = require('../utils');

const Query = {
  async items(parent, args, ctx, info) {
    return await ctx.db.query.items(
      {
        ...args,
      },
      info
    );
  },
  async item(parent, args, ctx, info) {
    return await ctx.db.query.item({ where: args.where }, info);
  },
  async itemsConnection(parent, args, ctx, info) {
    return await ctx.db.query.itemsConnection({ where: args.where }, info);
  },
  async me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in !');
    }
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    return await ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in !');
    }
    const order = await ctx.db.query.order(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      'ADMIN'
    );
    if (!ownsOrder || !hasPermissionToSeeOrder) {
      throw new Error('You do not have permission');
    }
    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be logged in !');
    }
    return await ctx.db.query.orders(
      {
        where: {
          user: {
            id: userId,
          },
        },
        orderBy: args.orderBy,
      },
      info
    );
  },
};

module.exports = Query;
