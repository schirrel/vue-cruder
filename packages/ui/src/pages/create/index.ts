import CreatePageComponent from "./Create.vue";

export const CreatePage = {
    name: "CreatePage",
    props: {
        resourceName: {
            type: String,
            // required: true,
        },
    },
    data() {
        return {
            form: {},
            // service: createSimpleCRUD(this.resourceName),
        };
    },
    mounted() {
        console.log('CreatePage', this)
    },

    render(createElement: any, context: any) {
        console.log('context', context)
        const data = context?.data
        const attrs = data?.attrs
        const resourceName = attrs?.resourceName
        return createElement("div",
            [createElement("h1", "Create:, resourceName = " + resourceName),
            createElement(CreatePageComponent, data)
            ]);
    },
}


export const EditPage = {
    name: "EditPage",
    props: {
        resourceName: {
            type: String,
            // required: true,
        },
    },
    data() {
        return {
            form: {},
            // service: createSimpleCRUD(this.resourceName),
        };
    },
    mounted() {
        console.log('EditPage', this)
    },

    render(createElement: any, context: any) {
        console.log('context', context)
        const data = context?.data
        const attrs = data?.attrs
        const resourceName = attrs?.resourceName
        return createElement("h1", "Edit:, resourceName = " + resourceName);
    },
}