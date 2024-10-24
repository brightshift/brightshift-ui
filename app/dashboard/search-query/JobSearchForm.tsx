"use client";

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Save, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

import { AdvancedSearchFields } from "./AdvancedSearchFields"
import { BasicSearchFields } from "./BasicSearchFields"

export default function JobSearchForm() {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <div className="rounded-lg border   p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-primary">
        Search Parameters
      </h2>
      <p className="mb-6 text-sm text-primary">
        Define your job search criteria
      </p>

      <div className="space-y-6">
        <BasicSearchFields
          showAdvanced={showAdvanced}
          onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
        />
        <AnimatePresence>
          {showAdvanced && <AdvancedSearchFields />}
        </AnimatePresence>

        <div className="flex justify-between pt-4">
          <Button className="flex items-center gap-2">
            <Search className="size-4" />
            Search Now
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <Save className="size-4" />
            Save Query
          </Button>
        </div>
      </div>
    </div>
  )
}