import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function TrialDetail() {
  const { id } = useParams();
  const trialId = parseInt(id); // Convert string to number

  // Mock data (expand this later)
  const trials = [
    {
      id: 1,
      title: "COVID-19 Vaccine Trial",
      condition: "COVID-19",
      phase: "Phase III",
      status: "Ongoing",
      startDate: "2024-01-01",
      endDate: "2025-01-01",
      institution: "AIIMS Delhi",
      studyType: "Interventional",
      description: "A double-blind study for COVID-19 vaccine efficacy.",
      documents: "https://ipfs.io/ipfs/QmXYZ123",
      milestones: ["Recruitment", "Dosing", "Follow-up", "Results Published"]
    },
    {
      id: 2,
      title: "Diabetes Drug Efficacy Study",
      condition: "Type 2 Diabetes",
      phase: "Phase II",
      status: "Completed",
      startDate: "2023-03-10",
      endDate: "2024-03-10",
      institution: "CMC Vellore",
      studyType: "Observational",
      description: "A study to evaluate drug response in diabetic patients.",
      documents: "https://ipfs.io/ipfs/QmXYZ456",
      milestones: ["Enrollment", "Lab Results", "Publication"]
    },
  
  ];

  const trial = trials.find(t => t.id === trialId);

  if (!trial) {
    return (
      <div className="p-8 text-center">
        <Navbar />
        <h2 className="text-xl font-semibold text-red-600">Trial not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <button onClick={() => window.history.back()} className="text-sm text-blue-600 hover:underline mb-4">
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-2">{trial.title}</h2>
        <p className="text-gray-600 mb-4">{trial.condition} | {trial.phase}</p>

        <div className="bg-white shadow p-4 rounded-md mb-6">
          <p><strong>Institution:</strong> {trial.institution}</p>
          <p><strong>Study Type:</strong> {trial.studyType}</p>
          <p><strong>Start Date:</strong> {trial.startDate}</p>
          <p><strong>End Date:</strong> {trial.endDate}</p>
          <p><strong>Status:</strong> {trial.status}</p>
          <p className="mt-4"><strong>Description:</strong></p>
          <p className="text-sm text-gray-700">{trial.description}</p>

          <p className="mt-4"><strong>Documents:</strong> 
            <a href={trial.documents} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              View Document
            </a>
          </p>

          <div className="mt-4">
            <strong>Milestones:</strong>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              {trial.milestones.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default TrialDetail;
