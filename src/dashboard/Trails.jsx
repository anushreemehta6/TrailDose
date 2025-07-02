import React from 'react'

export default function Trails() {
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
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                
                <td class="px-6 py-4 text-right flex gap-5">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                
                <td class="px-6 py-4 text-right flex gap-5">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
               
                <td class="px-6 py-4 text-right flex gap-5">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">view</a>
                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
  )
}
