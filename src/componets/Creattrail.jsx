import * as fcl from "@onflow/fcl";
import { useState } from "react";
import Navbar from "../componets/Navbar";

export default function CreateTrial() {
  const [formData, setFormData] = useState({
    title: "",
    condition: "",
    phase: "",
    institution: "",
    startDate: "",
    endDate: "",
    studyType: "",
    description: "",
    documents: "",
    milestones: [""],
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMilestoneChange = (index, value) => {
    const updated = [...formData.milestones];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, milestones: updated }));
  };

  const addMilestone = () => {
    setFormData((prev) => ({
      ...prev,
      milestones: [...prev.milestones, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/cadence/transactions/createTrial.cdc");
      const cadence = await res.text();

      const txId = await fcl.mutate({
        cadence,
        args: (arg, t) => [
          arg(formData.title, t.String),
          arg(formData.condition, t.String),
          arg(formData.phase, t.String),
          arg(formData.institution, t.String),
          arg(formData.startDate, t.String),
          arg(formData.endDate, t.String),
          arg(formData.studyType, t.String),
          arg(formData.description, t.String),
          arg(formData.documents, t.String),
          arg(formData.milestones.map((m) => m.trim()), t.Array(t.String)),
        ],
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 200,
      });

      console.log("✅ TX submitted:", txId);
      alert("Trial successfully submitted to Flow!");
    } catch (err) {
      console.error("❌ Error submitting trial:", err);
      alert("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
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

          <input name="documents" value={formData.documents} onChange={handleChange} placeholder="IPFS Document URL" className="input" />

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

          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Trial"}
          </button>
        </form>
      </div>
    </>
  );
}
