import React from 'react'

export default function Trails() {
    const trials = [
    {
      id: 1,
      title: "COVID-19 Vaccine Trial",
      condition: "COVID-19",
      phase: "Phase III",
      status: "Ongoing",
      startDate: "2024-01-01",
      endDate: "2025-01-01"
    },
    {
      id: 2,
      title: "Diabetes Drug Efficacy Study",
      condition: "Type 2 Diabetes",
      phase: "Phase II",
      status: "Completed",
      startDate: "2023-03-10",
      endDate: "2024-03-10"
    },
    {
      id: 3,
      title: "Cancer Immunotherapy Research",
      condition: "Lung Cancer",
      phase: "Phase I",
      status: "Pending Verification",
      startDate: "2024-07-01",
      endDate: "2026-07-01"
    }
  ];

  return (
    <div>
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            My Trials
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Below is a list of your registered trials with their current phase and verification status.
You can view full details, update milestones, or track progress in real-time.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Trial Title
                </th>
                <th scope="col" class="px-6 py-3">
                   Phase
                </th>
                <th scope="col" class="px-6 py-3">
                   Status
                </th>
                <th scope="col" class="px-6 py-3">
                   Start date
                </th>
                <th scope="col" class="px-6 py-3">
                    Options
                </th>
            </tr>
        </thead>
   {trials.map((item)=>{
    return (<tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                </th>
                <td class="px-6 py-4">
                    {item.phase}
                </td>
                <td class="px-6 py-4">
                   {item.status}
                </td>
                <td class="px-6 py-4">
                   {item.startDate}
                </td>
                <td class="px-6 py-4 text-right flex gap-5">
                    <a href={`/trial/${item.id}`} className="text-blue-600 hover:underline">View</a>

                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
           
            
            
        </tbody>)
        
        
        
  
   })}
    </table>
</div>

    </div>
  )
}
