import { componentBuilder } from "./component";

interface RouteProvider {
  name: string;
  path: string;
  options: any;
}

export const createRoute = ({ name, path, options }: RouteProvider) => {

  const component = componentBuilder({
    name,
    resource: options.resource,
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
