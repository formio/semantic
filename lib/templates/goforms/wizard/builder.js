export default (ctx) => `<div class="formio-wizard-builder-component-title">${ctx.t ? ctx.t(ctx.component && ctx.component.title) : ctx.component && ctx.component.title}</div>
`;
