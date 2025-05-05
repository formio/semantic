export default (ctx) => {
    const groups = ctx.groups;
    return `
    <div class="builder-sidebar">
      ${groups.map((group) => `${group}`).join("")}
    </div>
  `;
};
