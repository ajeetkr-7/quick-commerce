import React from 'react'
import SalesCard from './SalesCard';
import TopCitiesCard from './TopCititesCard';
import SKUDataTable from './SkuTable';

const dashboardData = {
    sales: {
        title: "Sales (MRP)",
        value: 125.49,
        change: 2.4,
        lastMonthValue: 119.69,
        trend: [
            { thisMonth: 1.5, lastMonth: 2.4, date: "09" },
            { thisMonth: 2.5, lastMonth: 2.2, date: "10" },
            { thisMonth: 2.5, lastMonth: 1.9, date: "11" },
            { thisMonth: 3.5, lastMonth: 3.2, date: "12" },
            { thisMonth: 2.8, lastMonth: 3.3, date: "13" },
            { thisMonth: 4.7, lastMonth: 3.2, date: "14" },
            { thisMonth: 3.1, lastMonth: 3.6, date: "15" },
            { thisMonth: 3.3, lastMonth: 2.4, date: "16" },
            { thisMonth: 5.2, lastMonth: 3.5, date: "17" }
        ]
    },
    totalQuantitySold: {
        title: "Total Quantity Sold",
        value: 125.49,
        change: 2.4,
        lastMonthValue: 140.69,
        trend: [
            { thisMonth: 1.5, lastMonth: 2.4, date: "09" },
            { thisMonth: 2.5, lastMonth: 2.2, date: "10" },
            { thisMonth: 2.5, lastMonth: 1.9, date: "11" },
            { thisMonth: 3.5, lastMonth: 3.2, date: "12" },
            { thisMonth: 2.8, lastMonth: 3.3, date: "13" },
            { thisMonth: 4.7, lastMonth: 3.2, date: "14" },
            { thisMonth: 3.1, lastMonth: 3.6, date: "15" },
            { thisMonth: 3.3, lastMonth: 2.4, date: "16" },
            { thisMonth: 5.2, lastMonth: 3.5, date: "17" }
        ]
    },
    topCities: {
        total: {
            value: "₹68.2L",
            change: 2.2
        },
        cities: [
            {
                name: "New Delhi",
                value: "₹26.5L",
                percentage: 35,
                change: 1.2,
            },
            {
                name: "Mumbai",
                value: "₹36.4L",
                percentage: 23,
                change: -3.3
            },
            {
                name: "West Bengal",
                value: "₹12.2L",
                percentage: 21,
                change: -2.3
            },
            {
                name: "Others",
                value: "₹24.3L",
                percentage: 9,
                change: 1.09
            }
        ]
    }
};

function CommerceDashboard() {

    return (
        <div className='flex flex-col p-6 bg-gray-100 gap-12'>
            <div className="flex flex-col w-full gap-4 sm:flex-row">
                <SalesCard data={dashboardData.sales} />
                <SalesCard data={dashboardData.totalQuantitySold} />

                {/* <QuantitySoldCard data={dashboardData.totalQuantitySold} /> */}
                <TopCitiesCard data={dashboardData.topCities} />
            </div>
            <SKUDataTable title="SKU Level Data" subtitle="Analytics for all your SKUs"  />
            <SKUDataTable  title="City Level Data" subtitle="Analytics for all your cities"/>

        </div>
    )
}

export default CommerceDashboard
