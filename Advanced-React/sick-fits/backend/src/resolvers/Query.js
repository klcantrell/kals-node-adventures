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
};

module.exports = Query;
