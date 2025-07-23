"use client"

import { Button } from '@/core/components/ui/button'
import { DateRangePicker } from '@/core/components/ui/date-range-picker'
import { Switch } from '@/core/components/ui/switch'
import { ChartBar, ChartLine } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <header className="flex justify-between h-18 shrink-0 items-center gap-2 border-b px-6">
            <h1>Quick Commerce</h1>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2.5 border border-gray-200 rounded-lg h-10 px-3'>
                    <ChartLine size={20} />
                    <Switch defaultChecked className="data-[state=checked]:bg-green-800 h-4 w-7"
                        thumbClassName="h-3 w-3 data-[state=checked]:translate-x-3" />
                </div>
                <DateRangePicker
                    onUpdate={(values) => console.log(values)}
                    initialDateFrom="2023-01-01"
                    initialDateTo="2023-12-31"
                    align="start"
                    locale="en-GB"
                    showCompare={false}
                />
            </div>
        </header>
    )
}

export default Header
