import { componentBuilder } from "./component";

type RouteType = 'create' | 'read' | 'update' | 'delete' | 'list'
interface RoutePage {
  type: RouteType,
  title: string,
  description: string
}
interface RouteProvider {
  name: string;
  path: string;
  resource: string;
  page: RoutePage;
  options: any;
}

export const createRoute = ({ name, path, resource, page, options }: RouteProvider) => {

  const component = componentBuilder({
    name,
    resource,
    type: page.type,
    options,
  })
  return {
    name,
    path,
    component,
    props: { page, resource, ...options },
  };
};
