import CreatePageComponent from "./Create.vue";

export const CreatePage = {
    name: "CreatePage",
    props: {
        resourceName: {
            type: String,
            required: true,
        },
        formOptions: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
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
        console.log(attrs)
        return createElement("div",
            [createElement("h1", "Create:, resourceName = " + resourceName),
            createElement(CreatePageComponent, data)
            ]);
    },
}