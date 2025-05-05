export default (ctx) => `<div class="ui secondary segment">
  <div class="content" ref="${ctx.nestedKey}">
    ${ctx.children}
  </div>
</div>
`;
