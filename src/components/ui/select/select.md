# Select

A dropdown select component built with Radix UI primitives.

## Usage

```tsx
import { 
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select'

export default function Example() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
```
