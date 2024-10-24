"use client"

import { useState } from "react"
import { countries } from "countries-list"
import { motion } from "framer-motion"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { AutoComplete, Input, Label, TagInput } from "@/components/ui"

export function AdvancedSearchFields() {
  const [tags, setTags] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [value, setValue] = useState({ label: "", value: "" })

  const countryList = Object.entries(countries).map(([key, value]) => {
    return {
      label: value.name,
      value: key,
    }
  })

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="grid grid-cols-1 items-center gap-x-4 lg:grid-cols-3">
          <AutoComplete
            options={countryList}
            emptyMessage="No results."
            placeholder="Find something"
            value={value}
            onValueChange={setValue}
            className=" max-h-9 py-1"
            label="Location"
          />

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
        <label className="mb-2 block text-lg font-semibold text-primary">
          Exclude Keywords
        </label>
        <p className="mb-3 text-sm text-primary/70">
          Enter search terms you feel your buyers will use when looking for your
          service
        </p>

        <TagInput
          maxTags={5}
          tags={tags}
          setTags={setTags}
          error={error}
          setError={setError}
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
    </motion.div>
  )
}
