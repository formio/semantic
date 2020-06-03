Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="ui segment secondary form-builder-panel" style="padding: 0" ref="group-panel-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'">\r\n  <div class="form-builder-group-header">\r\n    <h5 class="panel-title">\r\n      <button\r\n        class="ui button basic fluid builder-group-button"\r\n        type="button"\r\n        data-toggle="collapse"\r\n        data-target="#group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        data-parent="' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'"\r\n        ref="sidebar-anchor"\r\n      >\r\n        ' +
((__t = (ctx.t(ctx.group.title))) == null ? '' : __t) +
'\r\n      </button>\r\n    </h5>\r\n  </div>\r\n</div>\r\n<div class="ui segment" style="padding: 0">\r\n  <div\r\n    class="panel-collapse collapse ' +
((__t = (ctx.group.default ? ' in' : '')) == null ? '' : __t) +
'"\r\n    data-parent="#' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'"\r\n    data-default="' +
((__t = (ctx.group.default)) == null ? '' : __t) +
'"\r\n    id="group-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n    ref="sidebar-group"\r\n  >\r\n    <div id="group-container-' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'" class="card-body panel-body no-drop" ref="sidebar-container">\r\n      ';
 ctx.group.componentOrder.forEach(function(componentKey) { ;
__p += '\r\n      <span\r\n        data-group="' +
((__t = (ctx.groupKey)) == null ? '' : __t) +
'"\r\n        data-key="' +
((__t = (ctx.group.components[componentKey].key)) == null ? '' : __t) +
'"\r\n        data-type="' +
((__t = (ctx.group.components[componentKey].schema.type)) == null ? '' : __t) +
'"\r\n        class="ui button mini primary fluid formcomponent drag-copy"\r\n      >\r\n        ';
 if (ctx.group.components[componentKey].icon) { ;
__p += '\r\n          <i class="' +
((__t = (ctx.iconClass(ctx.group.components[componentKey].icon))) == null ? '' : __t) +
'" style="margin-right: 5px;"></i>\r\n        ';
 } ;
__p += '\r\n        ' +
((__t = (ctx.t(ctx.group.components[componentKey].title))) == null ? '' : __t) +
'\r\n        </span>\r\n      ';
 }) ;
__p += '\r\n      ' +
((__t = (ctx.subgroups.join(''))) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}