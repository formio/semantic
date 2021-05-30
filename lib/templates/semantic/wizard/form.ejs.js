Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.className)) == null ? '' : __t) +
'">\n  <div style="position: relative;">\n    ';
 if (ctx.wizardHeaderType === 'wizardHeaderVertical') { ;
__p += '\n      <div class="ui stackable grid">\n        <div class="three wide computer sixteen wide tablet sixteen wide mobile column">\n          ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n        </div>\n        <div class="one wide computer one wide mobile one wide tablet column"></div>\n        <div class="wizard-page ten wide computer fourteen wide tablet fourteen wide mobiles column" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n          ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n        </div>\n      </div>\n      <div class="ui grid" style="margin-top: 10px;">\n        <div class="four wide column"></div>\n        <div class="twelve wide column">\n          ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\n        </div>\n      </div>\n    ';
 } else { ;
__p += ' \n      ' +
((__t = ( ctx.wizardHeader )) == null ? '' : __t) +
'\n      <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n      </div>\n      ' +
((__t = ( ctx.wizardNav )) == null ? '' : __t) +
'\n    ';
 } ;
__p += ' \n  </div>\n</div>';
return __p
}