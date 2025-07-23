"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    GroupingState,
    getGroupedRowModel,
    getExpandedRowModel,
    getPaginationRowModel,
    getFilteredRowModel, // added import
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/core/components/ui/table"
import { useState } from "react"
import { Checkbox } from "@/core/components/ui/checkbox"
import { Button } from "@/core/components/ui/button"
import { ChevronDown } from "lucide-react"

interface SKUData {
    skuName: string
    sales: string
    outOfStock: string
    totalInventory: number
    avgRank: number
    estTraffic: number
    estImpressions: number
    ctr: string
    selected?: boolean
}

const data: SKUData[] = [
    {
        skuName: "Protein Bar 100g",
        sales: "₹93,132.12",
        outOfStock: "1.68%",
        totalInventory: 931.9,
        avgRank: 3.2,
        estTraffic: 12303,
        estImpressions: 25005,
        ctr: "1.9%",
        selected: true,
    },
    {
        skuName: "Choco Bar 100g",
        sales: "₹8,526.32",
        outOfStock: "6.79%",
        totalInventory: 328,
        avgRank: 4,
        estTraffic: 2960,
        estImpressions: 3657,
        ctr: "\u2193 4.1%",
        selected: true,
    },
    {
        skuName: "SKU 3",
        sales: "₹9313",
        outOfStock: "1.68%",
        totalInventory: 931.9,
        avgRank: 11,
        estTraffic: 1931,
        estImpressions: 931.9,
        ctr: "1.9%",
    },
    {
        skuName: "SKU 4",
        sales: "₹0",
        outOfStock: "0%",
        totalInventory: 0,
        avgRank: 0,
        estTraffic: 0,
        estImpressions: 0,
        ctr: "0.0%",
    },
]

const columns: ColumnDef<SKUData>[] = [
    {
        accessorFn: row => row.skuName,
        id: "skuName",
        header: () => <span>SKU Name</span>,
        cell: ({ row, getValue }) => {

            return (
                <span className="flex items-center gap-2">
                    <Checkbox checked={row.original.selected} className="ml-2" />
                    {getValue<string>()}
                </span>
            );
        },
        enableGrouping: true,
    },
    {
        header: "Availabilty",
        columns: [
            {
                accessorKey: "sales",
                header: "Sales",
            },
            {
                accessorKey: "outOfStock",
                header: "Out of Stock",
            },
            {
                accessorKey: "totalInventory",
                header: "Total Inventory",
            },
        ]
    },
    {
        header: "Visibility",
        columns: [
            {
                accessorKey: "avgRank",
                header: "Average Rank",
            },
            {
                accessorKey: "estTraffic",
                header: "Est. Traffic",
            },
            {
                accessorKey: "estImpressions",
                header: "Est. Impressions",
            },
            {
                accessorKey: "ctr",
                header: "CTR",
            },
        ]
    }
]

// Helper to extract number from string (handles % and currency)
function extractNumber(str: string): number {
    if (!str) return 0;
    const match = str.replace(/,/g, '').match(/-?\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
}

function getTotals(data: SKUData[]) {
    const totalSales = data.reduce((sum, d) => sum + extractNumber(d.sales), 0);
    const totalOutOfStock = data.reduce((sum, d) => sum + extractNumber(d.outOfStock), 0);
    const totalInventory = data.reduce((sum, d) => sum + (d.totalInventory || 0), 0);
    const avgRank = data.reduce((sum, d) => sum + (d.avgRank || 0), 0) / (data.length || 1);
    const totalTraffic = data.reduce((sum, d) => sum + (d.estTraffic || 0), 0);
    const totalImpressions = data.reduce((sum, d) => sum + (d.estImpressions || 0), 0);
    // For ctr, average of all rows
    const avgCtr = data.reduce((sum, d) => sum + extractNumber(d.ctr), 0) / (data.length || 1);
    return {
        totalSales,
        totalOutOfStock,
        totalInventory,
        avgRank,
        totalTraffic,
        totalImpressions,
        avgCtr,
    };
}

export default function SKUDataTable({ title, subtitle }: { title: string, subtitle: string }) {

    const [grouping, setGrouping] = useState<GroupingState>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            grouping,
        },
        onGroupingChange: setGrouping,
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        debugTable: true,
    })

    return (
        <div className='w-full flex flex-col gap-4 rounded-lg'>
            <div className='flex justify-between items-center px-0.5'>
                <div className='flex flex-col items-start gap-1 '>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='text-base text-gray-500'>{subtitle}</p>
                </div>
                <Button className="py-5.5 px-4 bg-green-900 rounded-lg">
                    <span className="text-base">{`Filters(${1})`}</span>
                    <ChevronDown className='h-4 w-4 ml-1' />
                </Button>
            </div>
            <div className="rounded-lg border mt-3 bg-white">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id} className="[&>th]:border-r last:border-r-0">
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id} colSpan={header.colSpan} className="text-center">
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {header.column.getCanGroup() ? (
                                                    // If the header can be grouped, let's add a toggle
                                                    <button
                                                        {...{
                                                            onClick: header.column.getToggleGroupingHandler(),
                                                            style: {
                                                                cursor: 'pointer',
                                                            },
                                                        }}
                                                    >
                                                        {header.column.getIsGrouped()
                                                            ? `🛑(${header.column.getGroupedIndex()}) `
                                                            : ``}
                                                    </button>
                                                ) : null}{' '}
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </div>
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id} className="py-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                        {/* Totals row */}
                        {(() => {
                            const totals = getTotals(data);
                            return (
                                <TableRow className="font-bold">
                                    <TableCell className="pl-4">Total</TableCell>
                                    <TableCell className="py-4">₹{totals.totalSales.toLocaleString()}</TableCell>
                                    <TableCell className="py-4">{totals.totalOutOfStock.toFixed(2)}%</TableCell>
                                    <TableCell className="py-4">{totals.totalInventory}</TableCell>
                                    <TableCell className="py-4">{totals.avgRank.toFixed(2)}</TableCell>
                                    <TableCell className="py-4">{totals.totalTraffic}</TableCell>
                                    <TableCell className="py-4">{totals.totalImpressions}</TableCell>
                                    <TableCell className="py-4">{totals.avgCtr.toFixed(2)}%</TableCell>
                                </TableRow>
                            );
                        })()}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
