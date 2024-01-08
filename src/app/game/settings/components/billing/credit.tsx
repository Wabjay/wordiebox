import React from "react";

export default function Credit() {
  return (
    <div className="relative overflow-x-auto  sm:rounded-lg">
      <table className="w-full text-14 leading-5 text-left rtl:text-right border-[#636363] border">
        <thead className="whitespace-nowrap text-[#7E7E82] uppercase bg-white border-b-[#636363] border-b">
          <tr>
            <th scope="col" className="font-medium px-6 py-3">
              Invoice number
            </th>
            <th scope="col" className="font-medium px-6 py-3">
              Date
            </th>
            <th scope="col" className="font-medium px-6 py-3">
              Amount
            </th>
            <th scope="col" className="font-medium px-6 py-3">
              Number of Credits
            </th>
            <th scope="col" className="font-medium px-6 py-3">
              Plan Name
            </th>
            <th scope="col" className="font-medium px-6 py-3">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white text-[#636363] font-normal border-b-[#636363] border-b">
            <th
              scope="row"
              className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white"
            >
              881-0002-475
            </th>
            <td className="px-6 py-4">7th November, 2023</td>
            <td className="px-6 py-4">$2</td>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">GameApp_10 Credits</td>
            <td className="px-6 py-4">
              <p className={`px-[6px] py-1 border ${status === "success" ? 'text-[#007A2F] bg-[#EBFFF3] border-[#99FFC0]' : status === "pending" ? 'text-[#007A2F] bg-[#EBFFF3] border-[#99FFC0]' : 'text-[#007A2F] bg-[#EBFFF3] border-[#99FFC0]'}`}>
                Success
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
