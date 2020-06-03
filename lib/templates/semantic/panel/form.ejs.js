Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<h4 class="ui top attached block header ' +
((__t = (ctx.component.className)) == null ? '' : __t) +
'" ref="header">\r\n  ';
 if (ctx.component.collapsible) { ;
__p += '\r\n    <i class="formio-collapse-icon ' +
((__t = (ctx.iconClass(ctx.collapsed ? 'plus-square-o' : 'minus-square-o'))) == null ? '' : __t) +
' text-muted" data-title="Collapse Panel"></i>\r\n  ';
 } ;
__p += '\r\n  ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n  ';
 if (ctx.component.tooltip) { ;
__p += '\r\n    <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted"></i>\r\n  ';
 } ;
__p += '\r\n</h4>\r\n';
 if (!ctx.collapsed || ctx.builder) { ;
__p += '\r\n<div class="ui bottom attached segment" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\r\n  ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n</div>\r\n';
 } ;
__p += '\r\n';
return __p
}