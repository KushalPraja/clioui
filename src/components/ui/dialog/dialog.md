# Dialog

A modal dialog component built on top of Radix UI Dialog primitive.

## Usage

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog';

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2>Dialog Title</h2>
        </DialogHeader>
        <p>Dialog content goes here</p>
        <DialogFooter>
          <button>Close</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Components

- `Dialog` - The root container
- `DialogTrigger` - The button that opens the dialog
- `DialogContent` - The content container
- `DialogHeader` - Optional header section
- `DialogFooter` - Optional footer section
