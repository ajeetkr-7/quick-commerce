"use client"
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/core/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/core/components/ui/chart';
import { Separator } from '@/core/components/ui/separator';
import { ArrowDown, ArrowUp, CircleQuestionMark } from 'lucide-react';
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


export default function TopCitiesCard({ data, className }: TopCitiesCardProps) {
    // Generate chartData from data.cities
    const chartData = data.cities.map((city, idx) => ({
        name: city.name,
        value: parseFloat(city.value.replace(/[^\d.]/g, '')) || 0,
        percentage: city.percentage,
        fill: `var(--chart-${(idx % 5) + 1})`,
    }));

    const chartConfig = data.cities.reduce((acc, city, idx) => {
        acc[`city${idx + 1}`] = {
            label: city.name,
            color: `var(--chart-${(idx % 5) + 1})`,
        };
        return acc;
    }, {} as ChartConfig);

    return (
        <Card className="pt-0 gap-0 flex-1 sm:max-w-1/3">
            <CardHeader className="flex items-center gap-2 space-y-0 py-4 sm:flex-row px-5">
                <div className="grid flex-1 gap-1 px-0">
                    <h1>{"Top Cities"}</h1>
                </div>
                <Button asChild variant={"ghost"} size="icon">
                    <CircleQuestionMark className='h-4 w-4' />
                </Button>
            </CardHeader>
            <Separator className='p-0 m-0' />
            <CardContent className="flex-1 pb-0 pt-0">
                <div className="relative w-full max-w-[280px] mx-auto overflow-hidden" style={{ height: '140px' }}>
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
                                dataKey="value"
                                nameKey="name"
                                innerRadius={90}
                                outerRadius={110}
                                startAngle={180}
                                endAngle={0}
                            >
                                {/* Pie slices */}
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                    {/* Total value and change overlay */}
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-cente rounded-md px-3 py-0 text-center">
                        <h1>Total</h1>
                        <h2 className="text-xl font-bold">{data.total.value}</h2>
                        <span className="text-sm text-green-700">{data.total.change > 0 ? '+' : ''}{data.total.change}%</span>
                    </div>
                </div>
                <div className='flex flex-col pt-6 gap-1.5'>
                    {data.cities.map((city, index) => (
                        <div className='flex items-center justify-between' key={index}>
                            <div className='flex items-center gap-2'>
                                <div className={`w-2 h-2 rounded-full`} style={{
                                    backgroundColor: `var(--chart-${(index % 5) + 1})`
                                }}/>
                                <span>{city.name}</span>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <div>{city.value}</div>
                                <div className=' px-1.5 py-0.5 rounded-sm bg-muted'>{city.percentage}{"%"}</div>
                                <div className='flex items-center gap-0.5'>
                                    {city.change > 0 
                                    ? <ArrowUp size={16} className='text-green-600' /> 
                                    : <ArrowDown size={16} className='text-red-600' />}
                                    <span className={`${city.change > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.abs(city.change)+"%"}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card >
    )
}
