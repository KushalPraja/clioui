# Tooltip Component

A tooltip component that displays additional information when hovering over an element.

## Usage

```tsx
import { Tooltip } from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip content="Additional information">
      <button>Hover me</button>
    </Tooltip>
  )
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `content` | `string` | The text content to display in the tooltip |
| `children` | `ReactNode` | The element that triggers the tooltip |
| `position` | `'top' \| 'right' \| 'bottom' \| 'left'` | The position of the tooltip relative to the trigger element |
| `delay` | `number` | Delay in milliseconds before showing the tooltip |

## Examples

### Basic Tooltip

```tsx
<Tooltip content="Click to save">
  <button>Save</button>
</Tooltip>
```

### Custom Position

```tsx
<Tooltip content="Settings" position="right">
  <IconButton icon={Settings} />
</Tooltip>
```

### With Delay

```tsx
<Tooltip content="Advanced options" delay={500}>
  <span>⚙️</span>
</Tooltip>
```