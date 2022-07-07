import { createSimpleCRUD } from "@vue-cruder/core"
import Vue from "vue"

const templateByType = (type) => {

    switch (type) {
        case 'create':
            return ``
        case 'read':
            return ``
        case 'update':
            return ``
        case 'delete':
            return ``
        case 'list':
            return ``
    }
}
const componentByType = ({ name, resourceName, type, options }) => {

    switch (type) {
        case 'create':
            return Vue.component(name, {
                props: options,
                data() {
                    return {
                        form: {},
                        service: createSimpleCRUD(resourceName)
                    }
                }, methods: {
                    create() {
                        this.service.create({
                            object: {
                                name: 'black'
                            }
                        })
                    }
                },
                template: templateByType(type)
            })
        case 'read':
            return ``
        case 'update':
            return ``
        case 'delete':
            return ``
        case 'list':
            return ``
    }
}


export const componentBuilder = (name: string, type: string, resourceName: string, options: any) => {
    const _component = Vue.component(name, {
        props: options,
        data() {
            return {
                service: createSimpleCRUD(resourceName)
            }
        },
        template: templateByType(type)
    })

    return _component
}