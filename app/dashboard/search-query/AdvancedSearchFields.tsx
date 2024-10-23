"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export function AdvancedSearchFields() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, State, or Remote"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="jobType">Job Type</Label>
          <Select>
            <SelectTrigger id="jobType">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fulltime">Full-time</SelectItem>
              <SelectItem value="parttime">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Experience Level (Years)</Label>
        <div className="pb-2 pt-6">
          <Slider defaultValue={[5]} max={10} step={1} className="w-full" />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>0</span>
          <span>5</span>
          <span>10+</span>
        </div>
      </div>

      <div>
        <Label htmlFor="companySize">Company Size</Label>
        <Select>
          <SelectTrigger id="companySize">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="startup">Startup (1-50)</SelectItem>
            <SelectItem value="small">Small (51-200)</SelectItem>
            <SelectItem value="medium">Medium (201-1000)</SelectItem>
            <SelectItem value="large">Large (1000+)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="exclude">Exclude Keywords</Label>
        <Input
          id="exclude"
          placeholder="Keywords to exclude from search"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          placeholder="Add any additional notes or requirements"
          className="mt-1"
        />
      </div>
    </div>
  )
}
