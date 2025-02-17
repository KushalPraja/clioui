# Dropdown Menu

A dropdown menu component that provides a list of actions or options when triggered.

## Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Props

### DropdownMenu

Contains all the dropdown menu parts.

### DropdownMenuTrigger

The button that toggles the dropdown menu.

### DropdownMenuContent

The content that appears when the dropdown menu is opened.

### DropdownMenuItem

The clickable items within the dropdown menu.