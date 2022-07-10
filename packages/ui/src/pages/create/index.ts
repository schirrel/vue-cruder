import CreatePage from './Create.vue'

export const CreatePageProvider = {
    name: "CreatePageProvider",
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
    methods: {
        create() {
            // this.service.create({
            //   object: this.form,
            // });
        },
    },
    mounted() {
        console.log('CreatePage', this)
    },
    render(createElement: any, context: any) {
        console.log('context', context)
        createElement(
            CreatePage,
            context.data,
        )
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