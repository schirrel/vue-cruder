
import { createSimpleCRUD } from "@vue-cruder/core";
import Vue from "vue";


const createPageComponent = Vue.extend({
    name: "CreatePage",
    props: {
        resourceName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            id: "",
            form: {},
            service: createSimpleCRUD(this.resourceName),
        };
    },
    methods: {
        update() {
            this.service.create({
                object: this.form,
            });
        },
    },
});

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