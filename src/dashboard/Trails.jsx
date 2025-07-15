import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import Navbar from "../componets/Navbar";

export default function Trials() {
  const [trials, setTrials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrials();
  }, []);

  const fetchTrials = async () => {
    try {
      const res = await fetch("/cadence/scripts/getAllTrials.cdc");
      const cadence = await res.text();

      const response = await fcl.query({
        cadence,
        args: (arg, t) => [],
      });

      console.log("Fetched Trials:", response);
      setTrials(response);
    } catch (error) {
      console.error("Failed to fetch trials:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
   
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">📋 My Trials</h2>

        {loading ? (
          <p>Loading trials...</p>
        ) : trials.length === 0 ? (
          <p>No trials found on Flow blockchain.</p>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Phase</th>
                  <th className="px-6 py-3">Condition</th>
                  <th className="px-6 py-3">Start Date</th>
                  <th className="px-6 py-3">End Date</th>
                  <th className="px-6 py-3">Options</th>
                </tr>
              </thead>
              <tbody>
                {trials.map((trial, idx) => (
                  <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {trial.title}
                    </td>
                    <td className="px-6 py-4">{trial.phase}</td>
                    <td className="px-6 py-4">{trial.condition}</td>
                    <td className="px-6 py-4">{trial.startDate}</td>
                    <td className="px-6 py-4">{trial.endDate}</td>
                    <td className="px-6 py-4 text-blue-600 hover:underline">
                      <a href={`/trial/${trial.id}`}>View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
