Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\n  ';
 for (var attr in ctx.attrs) { ;
__p += '\n    ';
 if (attr === "class") { ;
__p += '\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="ui message ' +
((__t = (ctx.attrs[attr])) == null ? '' : __t) +
'"\n    ';
 } else { ;
__p += '\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.attrs[attr])) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n>' +
((__t = (ctx.message)) == null ? '' : __t) +
'</div>\n';
return __p
}