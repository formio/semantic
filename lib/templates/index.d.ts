declare const _default: {
    goforms: {
        table: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        webform: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        well: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        wizard: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        wizardHeader: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        wizardHeaderClassic: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        wizardHeaderVertical: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        wizardNav: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        alert: {
            form: (ctx: import("./goforms/alert/form").AlertTemplateContext) => string;
        };
        errorsList: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        treeView: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        treeEdit: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        transform(type: any, text: any): any;
        defaultIconset: string;
        iconClass: (iconset: any, name: any, spinning: any) => string;
        cssClasses: {
            "has-error": string;
            "is-invalid": string;
            "formio-tab-panel-active": string;
            "formio-tab-link-active": string;
            "formio-tab-link-container-active": string;
        };
        builder: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderComponent: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderComponents: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderEditForm: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderPlaceholder: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderSidebar: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderSidebarGroup: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        builderWizard: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        button: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        checkbox: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        columns: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        component: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        datagrid: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        day: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        editgrid: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        field: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
            align: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        fieldset: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        file: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        icon: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        input: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
            html: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        label: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        loader: {
            form: typeof import("./goforms/loader/form").default;
        };
        loading: {
            form: typeof import("./goforms/loading/form").default;
        };
        message: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        multiValueRow: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        multiValueTable: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        panel: {
            form: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        radio: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        resourceAdd: {
            form: typeof import("./goforms/resourceAdd/form").default;
        };
        select: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        selectOption: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        signature: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (_ctx: import("./goforms/types").TemplateContext) => string;
        };
        survey: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            html: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        tab: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
            flat: (ctx: import("./goforms/types").TemplateContext) => string;
        };
        tree: {
            form: (ctx: import("./goforms/types").TemplateContext) => string;
        };
    };
};
export default _default;
