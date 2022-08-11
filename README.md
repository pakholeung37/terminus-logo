# Terminus Logo

Terminus logo icon for React, Solid, Vue, Svelte and Angular. Powered by
[Mitosis](https://mitosis.builder.io/).

It is more like a icons generator for mutiple frameworks which uses Mitosis to
transpile raw svg to framework related components.

## Usage

choose one of the following frameworks to install:

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
  template: '<Logo />'
}
```

## License

MIT
