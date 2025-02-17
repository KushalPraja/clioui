# Button

A versatile button component with multiple variants and sizes.

## Usage

```tsx
import { Button } from '@/components/ui/button';

export default function Example() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

## Props

| Prop      | Type                                    | Default     | Description             |
|-----------|----------------------------------------|-------------|-------------------------|
| variant   | 'default' \| 'secondary' \| 'outline'   | 'default'   | Style variant          |
| size      | 'sm' \| 'md' \| 'lg'                   | 'md'        | Button size            |
| className | string                                  | undefined   | Additional CSS classes  |
