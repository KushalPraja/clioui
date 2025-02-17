# MojoUI

A React UI component library built with Radix UI and Tailwind CSS.

## Installation

```bash
npm install @yourscope/mojoui
```

## Setup

1. Install peer dependencies:
```bash
npm install tailwindcss @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-tooltip
```

2. Add to your tailwind.config.js:
```js
module.exports = {
  content: [
    './node_modules/@yourscope/mojoui/dist/**/*.{js,ts,jsx,tsx}',
    // ...your content paths
  ],
  // ...rest of your config
}
```

## Usage

```tsx
import { Button, Dialog, Select } from '@yourscope/mojoui'

export default function App() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}
```

## Available Components

- Button
- Dialog
- Dropdown Menu
- Select
- Tabs
- Tooltip

## CLI Usage

Add components to your project:

```bash
npx mojoui add button
```

## License

MIT
