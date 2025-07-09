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
    enrollmentGoal: "",
    treatmentArms: [""],
    doseDetails: { "": "" },
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

  const handleTreatmentArmChange = (index, value) => {
    const updated = [...formData.treatmentArms];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, treatmentArms: updated }));
  };

  const addMilestone = () => {
    setFormData((prev) => ({
      ...prev,
      milestones: [...prev.milestones, ""],
    }));
  };

  const addTreatmentArm = () => {
    setFormData((prev) => ({
      ...prev,
      treatmentArms: [...prev.treatmentArms, ""],
    }));
  };

  const addDoseDetail = () => {
    setFormData((prev) => ({
      ...prev,
      doseDetails: { ...prev.doseDetails, "": "" },
    }));
  };

  const handleDoseChange = (oldKey, newKey, newValue, isKeyChange) => {
    const updated = { ...formData.doseDetails };
    if (isKeyChange) {
      const val = updated[oldKey];
      delete updated[oldKey];
      updated[newKey] = val;
    } else {
      updated[oldKey] = newValue;
    }
    setFormData((prev) => ({ ...prev, doseDetails: updated }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    const res = await fetch("/cadence/transactions/createTrial.cdc");
    const cadence = await res.text();

    // Debug: print formData before submission
    console.log("Submitting trial data:", formData);

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
        arg(formData.milestones.map(m => m.trim()), t.Array(t.String)),
        arg(formData.enrollmentGoal.toString(), t.UInt64),     // ✅ Converted to string
        arg(formData.treatmentArms.map(a => a.trim()), t.Array(t.String)),
        arg(Object.entries(formData.doseDetails), t.Dictionary({ key: t.String, value: t.String }))
      ],
      proposer: fcl.currentUser,
      payer: fcl.currentUser,
      authorizations: [fcl.currentUser],
      limit: 300,
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

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Brief description" className="input h-24" required />
          <input name="documents" value={formData.documents} onChange={handleChange} placeholder="IPFS Document URL" className="input" />

          {/* Milestones */}
          <div>
            <label className="font-medium">Milestones</label>
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

          {/* Enrollment Goal */}
          <input
            name="enrollmentGoal"
            type="number"
            value={formData.enrollmentGoal}
            onChange={handleChange}
            placeholder="Enrollment Goal"
            className="input"
            required
          />

          {/* Treatment Arms */}
          <div>
            <label className="font-medium">Treatment Arms</label>
            {formData.treatmentArms.map((tArm, i) => (
              <input
                key={i}
                value={tArm}
                onChange={(e) => handleTreatmentArmChange(i, e.target.value)}
                placeholder={`Treatment Arm ${i + 1}`}
                className="input mt-2"
              />
            ))}
            <button type="button" onClick={addTreatmentArm} className="text-blue-600 mt-2 text-sm underline">
              + Add Treatment Arm
            </button>
          </div>

          {/* Dose Details */}
          <div>
            <label className="font-medium">Dose Details (key/value)</label>
            {Object.entries(formData.doseDetails).map(([key, value], index) => (
              <div key={index} className="flex gap-2 mt-2">
                <input
                  value={key}
                  onChange={(e) => handleDoseChange(key, e.target.value, "", true)}
                  placeholder="Drug Name"
                  className="input w-1/2"
                />
                <input
                  value={value}
                  onChange={(e) => handleDoseChange(key, key, e.target.value, false)}
                  placeholder="Dosage"
                  className="input w-1/2"
                />
              </div>
            ))}
            <button type="button" onClick={addDoseDetail} className="text-blue-600 mt-2 text-sm underline">
              + Add Dose Detail
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
