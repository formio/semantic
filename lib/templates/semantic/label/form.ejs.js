Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<label class="' +
((__t = (ctx.label.className)) == null ? '' : __t) +
'">\r\n  ';
 if (!ctx.label.hidden) { ;
__p += '\r\n    ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\r\n    ';
 if (ctx.tooltip) { ;
__p += '\r\n      <span data-tooltip="' +
((__t = (ctx.tooltip)) == null ? '' : __t) +
'" data-position="right center">\r\n        <i class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'"></i>\r\n      </span>\r\n    ';
 } ;
__p += '\r\n  ';
 } ;
__p += '\r\n</label>\r\n';
return __p
}