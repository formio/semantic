Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.self.imageUpload) { ;
__p += '\n  <div class="ui celled list">\n    <div class="item">\n      <div class="ui grid">\n        ';
 if (!ctx.disabled) { ;
__p += '\n          <div class="one wide column"></div>\n        ';
 } ;
__p += '\n        <div class="';
 if (ctx.self.hasTypes) { ;
__p += 'nine';
 } else { ;
__p += 'twelve';
 } ;
__p += ' wide column"><strong>' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</strong></div>\n        <div class="three wide column"><strong>' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'</strong></div>\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\n          <div class="three wide column"><strong>' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'</strong></div>\n        ';
 } ;
__p += '\n      </div>\n    </div>\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n      <li class="list-group-item">\n        <div class="ui grid">\n          ';
 if (!ctx.disabled) { ;
__p += '\n            <div class="one wide column"><i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i></div>\n          ';
 } ;
__p += '\n          <div class="';
 if (ctx.self.hasTypes) { ;
__p += 'nine';
 } else { ;
__p += 'twelve';
 } ;
__p += ' wide column">\n            ';
 if (ctx.component.uploadOnly) { ;
__p += '\n              ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n              <a href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'" target="_blank" ref="fileLink">' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</a>\n            ';
 } ;
__p += '\n          </div>\n          <div class="three wide column">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n          ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\n            <div class="three wide column">\n              <select class="file-type" ref="fileType">\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n                  <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = ( type.label )) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if (ctx.self.hasTypes && ctx.disabled) { ;
__p += '\n          <div class="three wide column">' +
((__t = (file.fileType)) == null ? '' : __t) +
'</div>\n          ';
 } ;
__p += '\n        </div>\n      </li>\n    ';
 }) ;
__p += '\n    </div>\n';
 } else { ;
__p += '\n  <div>\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\n      <div>\n        <span>\n          <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px">\n          ';
 if (!ctx.disabled) { ;
__p += '\n            <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i>\n          ';
 } ;
__p += '\n        </span>\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\n  ';
 if (ctx.self.useWebViewCamera) { ;
__p += '\n    <div class="fileSelector">\n      <button class="btn btn-primary" ref="galleryButton"><i class="fa fa-book"></i> ' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'</button>\n      <button class="btn btn-primary" ref="cameraButton"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'</button>\n    </div>\n  ';
 } else if (!ctx.self.cameraMode) { ;
__p += '\n    <div class="fileSelector" ref="fileDrop" ' +
((__t = (ctx.fileDropHidden ? 'hidden' : '')) == null ? '' : __t) +
'>\n      <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'\n        ';
 if (ctx.self.imageUpload && ctx.component.webcam) { ;
__p += '\n          <a href="#" ref="toggleCameraMode"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Use Camera,'))) == null ? '' : __t) +
'</a>\n        ';
 } ;
__p += '\n        ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
' <a href="#" ref="fileBrowse" class="browse">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\n    </div>\n  ';
 } else { ;
__p += '\n    <div>\n      <video class="video" autoplay="true" ref="videoPlayer"></video>\n    </div>\n    <button class="btn btn-primary" ref="takePictureButton"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'</button>\n    <button class="btn btn-primary" ref="toggleCameraMode">' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'</button>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';
 ctx.statuses.forEach(function(status) { ;
__p += '\n  <div class="file ' +
((__t = (ctx.statuses.status === 'error' ? ' has-error' : '')) == null ? '' : __t) +
'">\n    <div class="ui grid">\n      <div class="fileName control-label thirteen wide column">' +
((__t = (status.originalName)) == null ? '' : __t) +
' <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="fileStatusRemove"></i></div>\n      <div class="fileSize control-label three wide column">' +
((__t = (ctx.fileSize(status.size))) == null ? '' : __t) +
'</div>\n    </div>\n    <div class="ui grid">\n      <div class="thirteen wide column">\n        ';
 if (status.status === 'progress') { ;
__p += '\n          <div class="progress">\n            <div class="progress-bar" role="progressbar" aria-valuenow="' +
((__t = (status.progress)) == null ? '' : __t) +
'" aria-valuemin="0" aria-valuemax="100" style="width: ' +
((__t = (status.progress)) == null ? '' : __t) +
'">\n              <span class="sr-only">' +
((__t = (status.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'</span>\n            </div>\n          </div>\n        ';
 } else { ;
__p += '\n          <div class="bg-' +
((__t = (status.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\n        ';
 } ;
__p += '\n      </div>\n    </div>\n  </div>\n';
 }) ;
__p += '\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\n  <div class="alert alert-warning">\n    ';
 if (!ctx.component.storage) { ;
__p += '\n      <p>' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.filereader) { ;
__p += '\n      <p>' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.formdata) { ;
__p += '\n      <p>' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.progress) { ;
__p += '\n      <p>' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
return __p
}