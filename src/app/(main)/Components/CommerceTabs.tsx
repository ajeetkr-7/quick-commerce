import { Tabs, TabsList, TabsTrigger } from '@/core/components/ui/tabs'
import React from 'react'

function CommerceTabs() {
    return (
        <div className='flex justify-betwee shrink-0 items-center gap-2 border-b px-4 py-4'>
            <Tabs defaultValue="Blinkit" >
                <TabsList className='h-11 border bg-transparent rounded-xl'>
                    <TabsTrigger value="Blinkit" className='px-4 rounded-lg'>Blinkit</TabsTrigger>
                    <TabsTrigger value="Zepto" className='px-4'>Zepto</TabsTrigger>
                    <TabsTrigger value="Instamart" className='px-4'>Instamart</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default CommerceTabs
