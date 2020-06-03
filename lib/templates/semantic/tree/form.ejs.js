Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.node.isRoot) { ;
__p += '\r\n  <div class="ui relaxed list">\r\n  <div class="item" ref="root" role="listitem">\r\n  ';
 } else { ;
__p += '\r\n  <div ref="node" class="item tree__level" role="listitem">\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.content) { ;
__p += '\r\n    <div ref="content" class="tree__node-content content">\r\n      ' +
((__t = ( ctx.content )) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.childNodes && ctx.childNodes.length) { ;
__p += '\r\n    <div ref="childNodes" class="tree__node-children list" role="list">\r\n      ' +
((__t = ( ctx.childNodes.join('') )) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.node.isRoot) { ;
__p += '\r\n    </div>\r\n  </div>\r\n  ';
 } else { ;
__p += '\r\n  </div>\r\n';
 } ;
__p += '\r\n';
return __p
}