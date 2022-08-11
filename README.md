# Terminus Logo

<p align="center">
<a href="./packages/svg/lib/terminus-logo.svg">
  <img width="200" src="./packages/svg/lib/terminus-logo.svg" alt="Terminus logo">
</a>
</p>

Terminus logo icon for React, Solid, Vue, Svelte and Angular. Powered by
[Mitosis](https://mitosis.builder.io/).

It is more like a icons generator for mutiple frameworks which uses Mitosis to
transpile raw svg to framework related components.

## Usage

choose one of the following packages to install:

| Package                                                                        |
| ------------------------------------------------------------------------------ |
| [@terminus-logo/react](https://www.npmjs.com/package/@terminus-logo/react)     |
| [@terminus-logo/solid](https://www.npmjs.com/package/@terminus-logo/solid)     |
| [@terminus-logo/vue](https://www.npmjs.com/package/@terminus-logo/vue)         |
| [@terminus-logo/svelte](https://www.npmjs.com/package/@terminus-logo/svelte)   |
| [@terminus-logo/angular](https://www.npmjs.com/package/@terminus-logo/angular) |
| [@terminus-logo/svg](https://www.npmjs.com/package/@terminus-logo/svg)         |

### React

```tsx
import Logo from '@trerminus-logo/react'

export const App = () => {
  return <Logo />
}
```

### Solid

```tsx
import Logo from '@trerminus-logo/solid'

export const App = () => {
  return <Logo />
}
```

### Svelte

```svelte
<script>
  import Logo from '@trerminus-logo/svelte'
</script>

<Logo />
```

### Vue

```Vue
<template>
  <Logo />
</template>

<script>
  import Logo from '@trerminus-logo/vue'
  export default {
    components: {
      Logo
    }
  }
</script>
```

### Angular

```ts
import { Logo } from '@trerminus-logo/angular'

export const AppComponent = {
  template: '<Logo />',
}
```

## License

MIT
