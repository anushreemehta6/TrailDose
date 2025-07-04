access(all) var trials: {UInt64: Trial}
access(all) var nextTrialID: UInt64

init() {
    self.trials = {}
    self.nextTrialID = 1
}

access(all) contract TrustDose {

    access(all) struct Trial {
        access(all) let id: UInt64
        access(all) let title: String
        access(all) let condition: String
        access(all) let phase: String
        access(all) let institution: String
        access(all) let startDate: String
        access(all) let endDate: String
        access(all) let studyType: String
        access(all) let description: String
        access(all) let documents: String
        access(all) let milestones: [String]
        access(all) let creator: Address

        // New Fields
        access(all) var enrollmentGoal: UInt64
        access(all) var currentEnrollment: UInt64
        access(all) var treatmentArms: [String]
        access(all) var doseDetails: {String: String}
        access(all) var results: {String: String}
        access(all) var eventLog: [String]

        init(
            id: UInt64,
            title: String,
            condition: String,
            phase: String,
            institution: String,
            startDate: String,
            endDate: String,
            studyType: String,
            description: String,
            documents: String,
            milestones: [String],
            creator: Address,
            enrollmentGoal: UInt64,
            treatmentArms: [String],
            doseDetails: {String: String}
        ) {
            self.id = id
            self.title = title
            self.condition = condition
            self.phase = phase
            self.institution = institution
            self.startDate = startDate
            self.endDate = endDate
            self.studyType = studyType
            self.description = description
            self.documents = documents
            self.milestones = milestones
            self.creator = creator

            self.enrollmentGoal = enrollmentGoal
            self.currentEnrollment = 0
            self.treatmentArms = treatmentArms
            self.doseDetails = doseDetails
            self.results = {}
            self.eventLog = []
        }
    }
    access(all) fun createTrial(
    title: String,
    condition: String,
    phase: String,
    institution: String,
    startDate: String,
    endDate: String,
    studyType: String,
    description: String,
    documents: String,
    milestones: [String],
    creator: Address
) {
    let newTrial = Trial(
        id: TrustDose.nextTrialID,
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
        creator: creator
    )

    TrustDose.trials[TrustDose.nextTrialID] = newTrial
    TrustDose.nextTrialID = TrustDose.nextTrialID + 1
}


    access(all) var trialCount: UInt64
    access(all) var trials: {UInt64: Trial}

    access(all) fun createTrial(
        title: String,
        condition: String,
        phase: String,
        institution: String,
        startDate: String,
        endDate: String,
        studyType: String,
        description: String,
        documents: String,
        milestones: [String],
        enrollmentGoal: UInt64,
        treatmentArms: [String],
        doseDetails: {String: String},
        signer: Address
    ) {
        self.trialCount = self.trialCount + 1
        let trial = Trial(
            id: self.trialCount,
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
            creator: signer,
            enrollmentGoal: enrollmentGoal,
            treatmentArms: treatmentArms,
            doseDetails: doseDetails
        )
        self.trials[self.trialCount] = trial
    }

    init() {
        self.trialCount = 0
        self.trials = {}
    }
}
