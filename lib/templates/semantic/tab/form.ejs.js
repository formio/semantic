Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ui top attached tabular menu">\r\n  ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n  <a class="item' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" role="presentation" ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(tab.label))) == null ? '' : __t) +
'</a>\r\n  ';
 }) ;
__p += '\r\n</div>\r\n';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n<div role="tabpanel" class="ui bottom attached tab segment' +
((__t = ( ctx.currentTab === index ? ' active' : '')) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'"">' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'</div>\r\n';
 }) ;
__p += '\r\n';
return __p
}