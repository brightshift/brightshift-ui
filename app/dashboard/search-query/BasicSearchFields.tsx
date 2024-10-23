"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface BasicSearchFieldsProps {
  showAdvanced: boolean
  onToggleAdvanced: () => void
}

export function BasicSearchFields({
  showAdvanced,
  onToggleAdvanced,
}: BasicSearchFieldsProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="queryName">Query Name</Label>
        <Input
          id="queryName"
          placeholder="E.g., Senior React Developer NYC"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="keywords">Keywords</Label>
        <Input
          id="keywords"
          placeholder="Enter job title, skills, or keywords"
          className="mt-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="advanced"
          checked={showAdvanced}
          onCheckedChange={onToggleAdvanced}
        />
        <Label htmlFor="advanced">Advanced Search Options</Label>
      </div>
    </div>
  )
}
