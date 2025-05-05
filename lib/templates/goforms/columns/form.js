export default (ctx) => {
    const component = ctx.component;
    const transform = ctx.transform;
    return `
    <div class="columns-row">
      ${component.columns
        .map((column) => `<div class="${transform("columns", column.width)} wide column" ref="${ctx.columnKey}">${ctx.children}</div>`)
        .join("")}
    </div>
  `;
};
