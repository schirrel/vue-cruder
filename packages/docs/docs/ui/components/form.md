# Form

## Props

| Prop      | Type                 | Description                                                                                  | Required |
| --------- | -------------------- | -------------------------------------------------------------------------------------------- | -------- |
| `service` | `CRUD`, `SimpleCRUD` | Object of the service to be used for the submit event, can be crud or simpleCrud             | yes      |
| `options` | `FormOptions`        | options with fields used for build the form                                                  | yes       |
| `title`   | `string`             | Array that define the columns of your list. Requires to be as `{ text: "Name",key: "name"` } | no       |

## Usage

```vue
<Form
  v-if="service"
  title="My Form"
  :service="service"
  :options="formOptions"
/>
```

Example of Options:

```js
 {
      title: "Create form",
      onSuccess: () => {
        alert("Success");
      },
      onError: (err) => {
        console.log(err);
      },
      fields: [
        {
          id: "name",
          type: "text",
          validations: ["required", "maxlength:120", "minlength:10"],
          label: "Name",
        },
        {
          id: "age",
          type: "number",
          validations: ["required", "minvalue:12"],
          label: "Age",
        },
      ],
    },
```

## Interfaces

### Form Options

```js
interface FormOptions {
  title?: string
  fields: FieldOptions[]
  submit?: () => void
  validate?: () => void
  onSuccess?: () => void
  onError?: () => void
}
```

