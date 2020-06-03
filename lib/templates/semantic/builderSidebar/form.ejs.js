Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="builder-sidebar-' +
((__t = (ctx.id)) == null ? '' : __t) +
'" class="ui segments" ref="sidebar">\r\n  ';
 ctx.groups.forEach(function(group) { ;
__p += '\r\n    ' +
((__t = ( group )) == null ? '' : __t) +
'\r\n  ';
 }) ;
__p += '\r\n</div>\r\n';
return __p
}