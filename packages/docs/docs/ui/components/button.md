# Form

## Props

| Prop      | Type                            | Description                                                | Required |
| --------- | ------------------------------- | ---------------------------------------------------------- | -------- |
| `type`    | `button`, `submit, `reset`      | Type of the button to be rendered, `button` is the default | no       |
| `variant` | `contained`, `text`, `outlined` | The look/style of the button                               | no       |

## Events

| Event   |
| ------- |
| `click` |

## Slot

| Slot      | Description          |
| --------- | -------------------- |
| `default` | slot for button text |

## Usage

```vue
<Button @click="model = 'click'"> Button </Button>
<Button type="submit" @click="model = 'click'"> Submit </Button>
<Button type="reset" @click="model = 'click'"> Reset </Button>
<Button @click="model = 'click'"> Default </Button>
<Button variant="text" @click="model = 'click'"> Text </Button>
<Button variant="outlined" @click="model = 'click'"> Outlined</Button>
<Button variant="contained" @click="model = 'click'"> contained </Button>
```
