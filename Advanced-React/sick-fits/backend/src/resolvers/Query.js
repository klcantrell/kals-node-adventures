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
};

module.exports = Query;
