"use client"

import React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/core/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/core/components/ui/chart"
import { Button } from '@/core/components/ui/button'
import { ArrowUpIcon, CircleQuestionMark } from 'lucide-react'
import { Separator } from '@/core/components/ui/separator'

export interface QuantitySoldCardProps {
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
        color: "var(--chart-1)",
    },
    lastMonth: {
        label: "Last Month",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

function QuantitySoldCard({ data, className }: QuantitySoldCardProps) {
    return (
        <Card className="pt-0 gap-0 flex-1 max-w-1/3">
            <CardHeader className="flex items-center gap-2 space-y-0 py-2 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>{data.title}</CardTitle>
                </div>
                <Button asChild variant={"ghost"} size="icon">
                    <CircleQuestionMark className='h-8 w-8 p-2' />
                </Button>
            </CardHeader>
            <Separator className='p-0 m-0' />
            <CardContent className="pt-0 px-0">
                <div className='flex items-center justify-between gap-2 px-4 py-2'>
                    <h1 className='text-2xl font-semibold'>
                        {data.value}
                    </h1>
                    <div className='flex flex-col items-end justify-center gap-1'>
                        <div className='flex items-center gap-1 text-green-600'>
                            <ArrowUpIcon size={18} />
                            <span>
                                {data.change}%
                            </span>
                        </div>
                        <span className='text-gray-600'>
                            {`vs ${data.lastMonthValue} last month`}
                        </span>
                    </div>
                </div>
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full pr-2 pt-2"
                >
                    <AreaChart data={data.trend} className='px-0'>
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-lastMonth)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-lastMonth)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-thisMonth)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-thisMonth)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={1}
                            minTickGap={2}
                        />
                        <YAxis
                            dataKey="thisMonth"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={2}
                            minTickGap={4}
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
                            dataKey="thisMonth"
                            type="natural"
                            fill="url(#fillMobile)"
                            stroke="var(--color-thisMonth)"
                            stackId="a"
                        />
                        <Area
                            dataKey="lastMonth"
                            type="natural"
                            fill="url(#fillDeskto)"
                            stroke="var(--color-lastMonth)"
                            strokeDasharray={"3 3"}
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}


export default QuantitySoldCard

