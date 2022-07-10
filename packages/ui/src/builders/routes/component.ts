import {
  CreatePageProvider,
  EditPage,
  DeletePage,
  ListPage,
  ReadPage,
  UpdatePage,
} from "@/pages";
import Vue from "vue";

interface ComponentProvider {
  name: string;
  type: string;
  resourceName: string;
  options: any;
}

const componentByType = ({
  name,
  resourceName,
  type,
  options,
}: ComponentProvider) => {
  switch (type) {
    case "create":
      return CreatePageProvider;
    case "read":
      return ReadPage;
    case "update":
      return EditPage;
    case "delete":
      return DeletePage;
    case "list":
      return ListPage;
  }
};

export const componentBuilder = ({
  name,
  resourceName,
  type,
  options,
}: ComponentProvider) => {
  const _component = componentByType({ name, resourceName, type, options })

  const props = {}
  Object.keys((_component as any).props).forEach(key => {
    if (options[key]) {
      (_component as any).props[key].default = options[key]
    }

  })

  const ComponentClass = Vue.extend({ ..._component, ...{ functional: true }, props: props })
  return ComponentClass
};