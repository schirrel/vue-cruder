# Form

> `:service=""`

### Form Options
```js
interface FormBuilder {
  title?: string
  fields: FieldOptions[]
  submit?: () => void
  validate?: () => void
  onSuccess?: () => void
  onError?: () => void
}
```
### Field Options
```js
interface FieldOptions {
  id: string;
  label: string;
  validations: string[];
  type: FieldType;
}
```
#### FieldType
```js
type FieldType =
  | "text"
  | "number"
  | "email"
  | "url"
  | "date"
  | "select"
  | "checkbox"
  | "radio";
```

## Usage

```vue
<Form
  v-if="service"
  title="My Form"
  :service="service"
  :options="formOptions"
/>
```

