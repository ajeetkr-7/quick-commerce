"use client"
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/core/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/core/components/ui/chart';
import { Separator } from '@/core/components/ui/separator';
import { ArrowUp, CircleQuestionMark } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

export interface TopCitiesCardProps {
    data: {
        total: {
            value: string;
            change: number;
        };
        cities: {
            name: string;
            value: string;
            percentage: number;
            change: number;
        }[];
    };
    className?: string;
}

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig


export default function TopCitiesCard({ data, className }: TopCitiesCardProps) {
    return (
        <Card className="pt-0 gap-0 flex-1 max-w-1/3">
            <CardHeader className="flex items-center gap-2 space-y-0 py-2 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>{"Top Cities"}</CardTitle>
                </div>
                <Button asChild variant={"ghost"} size="icon">
                    <CircleQuestionMark className='h-8 w-8 p-2' />
                </Button>
            </CardHeader>
            <Separator className='p-0 m-0' />
            <CardContent className="flex-1 pb-0">
                <div className="relative w-full max-w-[300px] mx-auto overflow-hidden" style={{ height: '150px' }}>
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-square w-full"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={chartData}
                                dataKey="visitors"
                                nameKey="browser"
                                innerRadius={92}
                                startAngle={180}
                                endAngle={0}
                            >
                                {/* Pie slices */}
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </div>
                <div className='flex flex-col pt-6 gap-2'>
                    {data.cities.map((city, index) => (
                        <div className='flex items-center justify-between' key={index}>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <span>{city.name}</span>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <div>{city.value}</div>
                                <div className=' px-1.5 py-0.5 rounded-sm bg-muted'>{city.percentage}{"%"}</div>
                                <div className='flex items-center gap-0.5'>
                                    <ArrowUp size={16} />
                                    <span>{Math.abs(city.change)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card >
    )
}
