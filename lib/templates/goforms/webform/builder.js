export default (ctx) => `<div class="ui visible message"><p>${ctx.t ? ctx.t(ctx.component && ctx.component.title) : ctx.component && ctx.component.title}</p></div>
`;
