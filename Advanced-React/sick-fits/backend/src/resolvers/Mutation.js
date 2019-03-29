const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args,
      },
    });

    return item;
  },
  async updateItem(parent, args, ctx, info) {
    const { id, ...updates } = args;
    return ctx.db.mutation.updateItem({
      data: updates,
      where: { id },
    });
  },
};

module.exports = Mutations;
