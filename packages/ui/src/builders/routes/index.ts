import { componentBuilder } from "./component";

interface RouteProvider {
  name: string;
  path: string;
  options: any;
}

export const createRoute = ({ name, path, options }: RouteProvider) => {

  const component = componentBuilder({
    name,
    resourceName: options.resourceName,
    type: options.type,
    options,
  })
  return {
    name,
    path,
    component,
    props: options,
    meta: { ...options }
  };
};
