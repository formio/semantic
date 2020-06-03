Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ui grid">\r\n  <div class="row">\r\n    ';
 ctx.values.forEach(function(value) { ;
__p += '\r\n    <div class="two wide column">\r\n      ' +
((__t = ( value )) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 }) ;
__p += '\r\n    <div class="five wide column">\r\n      <div class="ui mini right floated buttons">\r\n        ';
 if (ctx.node.hasChildren) { ;
__p += '\r\n        <button ref="toggleNode" class="ui button toggleNode">' +
((__t = ( ctx.t(ctx.node.collapsed ? 'Expand' : 'Collapse') )) == null ? '' : __t) +
'</button>\r\n        <div class="or"></div>\r\n        ';
 } ;
__p += '\r\n        ';
 if (!ctx.readOnly) { ;
__p += '\r\n        <button ref="addChild" class="ui button primary addChild">' +
((__t = ( ctx.t('Add') )) == null ? '' : __t) +
'</button>\r\n        <div class="or"></div>\r\n        <button ref="editNode" class="ui button editNode">' +
((__t = ( ctx.t('Edit') )) == null ? '' : __t) +
'</button>\r\n        <div class="or"></div>\r\n        <button ref="removeNode" class="ui button negative removeNode">' +
((__t = ( ctx.t('Delete') )) == null ? '' : __t) +
'</button>\r\n        ';
 if (ctx.node.revertAvailable) { ;
__p += '\r\n        <div class="or"></div>\r\n        <button ref="revertNode" class="ui button negative revertNode">' +
((__t = ( ctx.t('Revert') )) == null ? '' : __t) +
'</button>\r\n        ';
 } ;
__p += '\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}