"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = require("./builder");
var builderComponent_1 = require("./builderComponent");
var builderComponents_1 = require("./builderComponents");
var builderEditForm_1 = require("./builderEditForm");
var builderPlaceholder_1 = require("./builderPlaceholder");
var builderSidebar_1 = require("./builderSidebar");
var builderSidebarGroup_1 = require("./builderSidebarGroup");
var builderWizard_1 = require("./builderWizard");
var button_1 = require("./button");
var checkbox_1 = require("./checkbox");
var columns_1 = require("./columns");
var component_1 = require("./component");
var cssClasses_1 = require("./cssClasses");
var datagrid_1 = require("./datagrid");
var day_1 = require("./day");
var editgrid_1 = require("./editgrid");
var field_1 = require("./field");
var fieldset_1 = require("./fieldset");
var file_1 = require("./file");
var icon_1 = require("./icon");
var iconClass_1 = require("./iconClass");
var input_1 = require("./input");
var label_1 = require("./label");
var loader_1 = require("./loader");
var loading_1 = require("./loading");
var message_1 = require("./message");
var multiValueRow_1 = require("./multiValueRow");
var multiValueTable_1 = require("./multiValueTable");
var panel_1 = require("./panel");
var radio_1 = require("./radio");
var resourceAdd_1 = require("./resourceAdd");
var select_1 = require("./select");
var selectOption_1 = require("./selectOption");
var signature_1 = require("./signature");
var survey_1 = require("./survey");
var tab_1 = require("./tab");
var table_1 = require("./table");
var tree_1 = require("./tree");
var partials_1 = require("./tree/partials");
var webform_1 = require("./webform");
var well_1 = require("./well");
var wizard_1 = require("./wizard");
var wizardHeader_1 = require("./wizardHeader");
var wizardHeaderClassic_1 = require("./wizardHeaderClassic");
var wizardHeaderVertical_1 = require("./wizardHeaderVertical");
var wizardNav_1 = require("./wizardNav");
var alert_1 = require("./alert");
var errorsList_1 = require("./errorsList");
exports.default = __assign(__assign({ transform: function (type, text) {
        if (!text) {
            return text;
        }
        var columns = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
        };
        switch (type) {
            case 'columns':
                return columns.hasOwnProperty(text.toString()) ? columns[text.toString()] : text;
            case 'class':
                return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
        }
        return text;
    }, defaultIconset: 'icon', iconClass: iconClass_1.default, cssClasses: cssClasses_1.default, builder: builder_1.default, builderComponent: builderComponent_1.default, builderComponents: builderComponents_1.default, builderEditForm: builderEditForm_1.default, builderPlaceholder: builderPlaceholder_1.default, builderSidebar: builderSidebar_1.default, builderSidebarGroup: builderSidebarGroup_1.default, builderWizard: builderWizard_1.default, button: button_1.default, checkbox: checkbox_1.default, columns: columns_1.default, component: component_1.default, datagrid: datagrid_1.default, day: day_1.default, editgrid: editgrid_1.default, field: field_1.default, fieldset: fieldset_1.default, file: file_1.default, icon: icon_1.default, input: input_1.default, label: label_1.default, loader: loader_1.default, loading: loading_1.default, message: message_1.default, multiValueRow: multiValueRow_1.default, multiValueTable: multiValueTable_1.default, panel: panel_1.default, radio: radio_1.default, resourceAdd: resourceAdd_1.default, select: select_1.default, selectOption: selectOption_1.default, signature: signature_1.default, survey: survey_1.default, tab: tab_1.default, tree: tree_1.default }, partials_1.default), { table: table_1.default, webform: webform_1.default, well: well_1.default, wizard: wizard_1.default, wizardHeader: wizardHeader_1.default, wizardHeaderClassic: wizardHeaderClassic_1.default, wizardHeaderVertical: wizardHeaderVertical_1.default, wizardNav: wizardNav_1.default, alert: alert_1.default, errorsList: errorsList_1.default });
