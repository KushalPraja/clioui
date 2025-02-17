import React from 'react'
import { Button } from '../src/components/ui/button'

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">MojoUI Test</h1>
      
      <div className="space-x-2">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      <div className="space-x-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}
