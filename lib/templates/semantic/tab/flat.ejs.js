Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n  <h4 class="ui top attached block header">' +
((__t = ( ctx.t(tab.label) )) == null ? '' : __t) +
'</h4>\r\n  <div class="ui bottom attached segment">\r\n    ' +
((__t = ( ctx.tabComponents[index] )) == null ? '' : __t) +
'\r\n  </div>\r\n';
 }) ;
__p += '\r\n';
return __p
}