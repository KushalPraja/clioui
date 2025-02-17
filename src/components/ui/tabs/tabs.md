# Mojo UI Tabs Component

A tab component that provides accessible and customizable tabbed interface.

## Features

- Follows WAI-ARIA guidelines
- Keyboard navigation support
- Customizable styles
- Responsive design

## Usage

```jsx
import { Tabs } from '@mojoui/tabs'

<Tabs>
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
  <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
</Tabs>
```

## API Reference

### Tabs

The root component that wraps the tab interface.

### Tabs.List

Container for tab triggers.

### Tabs.Trigger

The clickable tab element that controls visibility of tab content.

### Tabs.Content

The content panel associated with each tab.

## Examples

### Basic Tabs

```jsx
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">Account settings...</Tabs.Content>
  <Tabs.Content value="password">Change password...</Tabs.Content>
</Tabs>
```