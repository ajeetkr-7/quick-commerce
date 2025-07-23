import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/ui/tabs'
import React from 'react'
import CommerceDashboard from './CommerceDashboard'
import { Separator } from '@/core/components/ui/separator'

function CommerceTabs() {
    const tabData = [
        { value: "Blinkit", label: "Blinkit", icon: "/assets/images/blinkit.png" },
        { value: "Zepto", label: "Zepto", icon: "/assets/images/zepto.png" },
        { value: "Instamart", label: "Instamart", icon: "/assets/images/instamart.png" },
    ]

    return (
        <div className='flex justify-between shrink-0 items-center gap-2 border-b'>
            <Tabs defaultValue={tabData[0].value} className=" w-full gap-0">
                <TabsList className='justify-between h-11 my-4 ml-4'>
                    {tabData.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value} className='flex items-center gap-2 px-2.5 sm:px-3'>
                            <img src={tab.icon} alt={tab.label} className='w-5 h-5' />
                            <span className='text-base'>{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabData.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value} className='p-0 m-0 border-t'>
                        <CommerceDashboard />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default CommerceTabs
