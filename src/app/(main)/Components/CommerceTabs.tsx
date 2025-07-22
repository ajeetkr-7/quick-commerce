import { Tabs, TabsList, TabsTrigger } from '@/core/components/ui/tabs'
import React from 'react'

function CommerceTabs() {
    return (
        <div className='flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4'>
            <Tabs defaultValue="Blinkit" >
                <TabsList className='h-10 border bg-transparent'>
                    <TabsTrigger value="Blinkit" className='py-2'>Blinkit</TabsTrigger>
                    <TabsTrigger value="Zepto">Zepto</TabsTrigger>
                    <TabsTrigger value="Instamart">Instamart</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default CommerceTabs
