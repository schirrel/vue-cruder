export const createRoute = ({ name, path, options }) => {
    return {
        name,
        path,
        components: componentBuilder(options)
    }

}