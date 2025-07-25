"use client"

import React from 'react'
import { Area, AreaChart, CartesianGrid, Line, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/core/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/core/components/ui/chart"
import { Button } from '@/core/components/ui/button'
import { ArrowUpIcon, CircleQuestionMark } from 'lucide-react'
import { Separator } from '@/core/components/ui/separator'

export interface SalesCardProps {
    data: {
        title: string;
        value: number;
        change: number;
        lastMonthValue: number;
        trend: Array<{
            thisMonth: number;
            lastMonth: number;
            date: string;
        }>;
    };
    className?: string;
}


const chartConfig = {
    thisMonth: {
        label: "This Month",
        color: "var(--chart-2)",
    },
    lastMonth: {
        label: "Last Month",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

function SalesCard({ data, className }: SalesCardProps) {
    return (
        <Card className="py-0 gap-0 flex-1 sm:max-w-1/3 sm:p-0 md:p-0">
            <CardHeader className="flex items-center gap-2 space-y-0 py-4 sm:flex-row px-5">
                <div className="grid flex-1 gap-1 px-0">
                    <h1>{data.title}</h1>
                </div>
                <Button asChild variant={"ghost"} size="icon">
                    <CircleQuestionMark className='h-4 w-4' />
                </Button>
            </CardHeader>
            <Separator className='p-0 m-0' />
            <CardContent className="p-0 m-0">
                <div className='flex items-center justify-between gap-2 px-4.5 py-2'>
                    <h1 className='text-3xl font-semibold'>
                        {data.value}
                    </h1>
                    <div className='flex flex-col items-end justify-center gap-1'>
                        <div className='flex items-center gap-1 text-green-600'>
                            <ArrowUpIcon size={18} />
                            <span className='font-semibold text-base'>
                                {data.change}%
                            </span>
                        </div>
                        <span className='text-gray-500'>
                            {`vs ${data.lastMonthValue} last month`}
                        </span>
                    </div>
                </div>
                <ChartContainer
                    config={chartConfig}
                    className=" h-[200px] w-full pr-2 pt-2 pl-0"
                >
                    <AreaChart data={data.trend} className='px-0'>
                        <defs>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-thisMonth)"
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="80%"
                                    stopColor="var(--color-thisMonth)"
                                    stopOpacity={0.05}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            fontSize={14}
                        />
                        <YAxis
                            dataKey="thisMonth"
                            tickLine={false}
                            axisLine={false}
                            width={40}
                            fontSize={14}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return value as string
                                    }}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="lastMonth"
                            type="natural"
                            fill="transparent"
                            stroke="var(--color-lastMonth)"
                            strokeDasharray={"3 3"}
                            stackId="b"
                        />
                        <Area
                            dataKey="thisMonth"
                            type="natural"
                            fill="url(#fillMobile)"
                            stroke="var(--color-thisMonth)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
                <Separator className='p-0 m-0' />
                <div className='flex items-center p-3 m-0'>
                    <div className='flex items-center gap-1.5 px-2'>
                        <div className='h-1.5 w-1.5 rounded-full flex bg-green-600/60' />
                        <p className='text-gray-500 font-light' >{"This month"}</p>
                    </div>
                    <div className='flex items-center gap-1.5 px-2'>
                        <div className='h-1.5 w-1.5 rounded-full flex bg-red-600/60' />
                        <p className='text-gray-500 font-light'>{"Last month"}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


export default SalesCard
