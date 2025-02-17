import React from 'react'
import { Button } from '../src/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../src/components/ui/dialog'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../src/components/ui/dropdown-menu'
import { Select, SelectTrigger, SelectContent, SelectItem } from '../src/components/ui/select'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../src/components/ui/tabs'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../src/components/ui/tooltip'

export default function App() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">MojoUI Components</h1>

      <div className="space-y-4">
        <h2 className="text-xl">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <h2>Dialog Title</h2>
            <p>Dialog content goes here</p>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Select</h2>
        <Select>
          <SelectTrigger>
            <span>Select option</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Tabs</h2>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Tab 1 content</TabsContent>
          <TabsContent value="tab2">Tab 2 content</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Tooltip</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
