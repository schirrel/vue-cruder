# Field

## Validations
Array of string that should follow a bellow pattern to validates the input:
Built in:
- 'required': HTML required
- 'empty': _In progress_ validate if is a stirng is empty, a value is null or and undefined
- 'maxvalue': HTML min value
- 'minvalue': HTML max value
- 'maxlength': HTML maxlength
- 'minlength': HTML minlength


Use with value separated by `:`, with exception of `required`, example:
- `minvalue:12`
- `minlength:3`
- `maxvalue:99`
- `minlength:50`
- `required`

## Interfaces

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
