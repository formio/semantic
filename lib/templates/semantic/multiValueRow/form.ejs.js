Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<tr ref="row">\r\n  <td>\r\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n  </td>\r\n  ';
 if (!ctx.disabled) { ;
__p += '\r\n  <td>\r\n    <button type="button" class="ui icon button secondary" ref="removeRow">\r\n      <i class="trash icon"></i>\r\n    </button>\r\n  </td>\r\n  ';
 } ;
__p += '\r\n</tr>\r\n';
return __p
}