declare const goforms: {
    framework: string;
    templates: {
        goforms: {
            table: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            webform: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            well: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            wizard: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            wizardHeader: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            wizardHeaderClassic: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            wizardHeaderVertical: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            wizardNav: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            alert: {
                form: (ctx: import("./templates/goforms/alert/form").AlertTemplateContext) => string;
            };
            errorsList: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            treeView: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            treeEdit: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
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
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderComponent: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderComponents: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderEditForm: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderPlaceholder: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderSidebar: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderSidebarGroup: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            builderWizard: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            button: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            checkbox: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            columns: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            component: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            datagrid: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            day: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            editgrid: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            field: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
                align: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            fieldset: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            file: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            icon: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            input: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            label: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            loader: {
                form: typeof import("./templates/goforms/loader/form").default;
            };
            loading: {
                form: typeof import("./templates/goforms/loading/form").default;
            };
            message: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            multiValueRow: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            multiValueTable: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            panel: {
                form: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            radio: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            resourceAdd: {
                form: typeof import("./templates/goforms/resourceAdd/form").default;
            };
            select: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            selectOption: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            signature: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (_ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            survey: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                html: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            tab: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
                flat: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
            tree: {
                form: (ctx: import("./templates/goforms/types").TemplateContext) => string;
            };
        };
    };
};
export default goforms;
export { goforms };
