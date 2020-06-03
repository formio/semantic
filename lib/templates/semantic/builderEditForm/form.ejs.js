Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ui grid">\r\n  <div class="eight wide column">\r\n    <h3 class="lead">' +
((__t = (ctx.t(ctx.componentInfo.title))) == null ? '' : __t) +
' ' +
((__t = (ctx.t('Component'))) == null ? '' : __t) +
'</h3>\r\n  </div>\r\n  <div class="eight wide column">\r\n    <div class="right floated" style="margin-right: 20px; margin-top: 10px">\r\n      <a href="' +
((__t = (ctx.componentInfo.documentation)) == null ? '' : __t) +
'" target="_blank">\r\n        <i class="' +
((__t = (ctx.iconClass('new-window'))) == null ? '' : __t) +
'"> ' +
((__t = (ctx.t('Help'))) == null ? '' : __t) +
'</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="ui grid">\r\n  <div class="';
 if (ctx.preview) { ;
__p += 'eight';
 } else { ;
__p += 'sixteen';
 } ;
__p += ' wide column">\r\n    <div ref="editForm">\r\n        ' +
((__t = (ctx.editForm)) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 if (!ctx.preview) { ;
__p += '\r\n    <div style="margin-top: 10px;">\r\n      <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\r\n      <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\r\n      <button class="ui button negative" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n  ';
 if (ctx.preview) { ;
__p += '\r\n  <div class="eight wide column">\r\n    <div class="ui top attached block header">\r\n      ' +
((__t = (ctx.t('Preview'))) == null ? '' : __t) +
'\r\n    </div>\r\n    <div class="ui bottom attached segment" ref="preview">\r\n      ' +
((__t = (ctx.preview)) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 if (ctx.componentInfo.help) { ;
__p += '\r\n    <div class="ui secondary segment formio-settings-help">\r\n      ' +
((__t = ( ctx.componentInfo.help )) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    <div style="margin-top: 10px;">\r\n      <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\r\n      <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\r\n      <button class="ui button negative" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\r\n    </div>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}