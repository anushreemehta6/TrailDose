import TrustDose from  0x49f216cc3af15405

transaction(
  title: String,
  condition: String,
  phase: String,
  institution: String,
  startDate: String,
  endDate: String,
  studyType: String,
  description: String,
  documents: String,
  milestones: [String]
) {
    prepare(signer: AuthAccount) {
        TrustDose.createTrial(
            title: title,
            condition: condition,
            phase: phase,
            institution: institution,
            startDate: startDate,
            endDate: endDate,
            studyType: studyType,
            description: description,
            documents: documents,
            milestones: milestones,
            creator: signer.address
        )
    }
}
