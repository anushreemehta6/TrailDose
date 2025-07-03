import React, { useState } from "react";
import Navbar from './Navbar'
function RegisterTrial() {
  const [formData, setFormData] = useState({
    title: "",
    condition: "",
    phase: "",
    institution: "",
    startDate: "",
    endDate: "",
    studyType: "",
    description: "",
    documentLink: "",
    milestones: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMilestoneChange = (index, value) => {
    const newMilestones = [...formData.milestones];
    newMilestones[index] = value;
    setFormData(prev => ({ ...prev, milestones: newMilestones }));
  };

  const addMilestone = () => {
    setFormData(prev => ({ ...prev, milestones: [...prev.milestones, ""] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trial data:", formData);

    // 👉 Send this data to Flow blockchain (later: via createTrial transaction)
    // Example: call a function like createTrialTx(formData)
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <button
    onClick={() => window.location.href = "/dashboard/pi"}
    className="text-blue-600 hover:underline text-sm mb-4"
  >
    ← Back to Dashboard
  </button>
        <h2 className="text-xl font-semibold mb-4">📋 Register New Clinical Trial</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Trial Title" className="input" required />
          <input name="condition" value={formData.condition} onChange={handleChange} placeholder="Disease / Condition" className="input" required />

          <select name="phase" value={formData.phase} onChange={handleChange} className="input" required>
            <option value="">Select Trial Phase</option>
            <option value="I">Phase I</option>
            <option value="II">Phase II</option>
            <option value="III">Phase III</option>
            <option value="IV">Phase IV</option>
          </select>

          <input name="institution" value={formData.institution} onChange={handleChange} placeholder="Institution" className="input" required />

          <div className="flex gap-4">
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="input w-full" required />
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="input w-full" required />
          </div>

          <select name="studyType" value={formData.studyType} onChange={handleChange} className="input" required>
            <option value="">Select Study Type</option>
            <option value="Interventional">Interventional</option>
            <option value="Observational">Observational</option>
          </select>

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Brief description of the trial" className="input h-24" required />

          <input name="documentLink" value={formData.documentLink} onChange={handleChange} placeholder="Document URL or IPFS CID" className="input" />

          <div>
            <label className="font-medium">Milestone Plan</label>
            {formData.milestones.map((m, i) => (
              <input
                key={i}
                value={m}
                onChange={(e) => handleMilestoneChange(i, e.target.value)}
                placeholder={`Milestone ${i + 1}`}
                className="input mt-2"
              />
            ))}
            <button type="button" onClick={addMilestone} className="text-blue-600 mt-2 text-sm underline">
              + Add another milestone
            </button>
          </div>

          <button type="submit" className="bg-[#90ddb9] px-4 py-2 rounded  hover:bg-[#c2b1d8] transition duration-300">
            Submit Trial
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterTrial;
