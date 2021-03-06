export const participantFields = `
  id
  displayName
  guessName
  isAdmin
  isFinish
  color
  namingUser { 
    id
    displayName
    guessName
  }
  seterUser {
    id
    displayName
    guessName
  }
  correctAnswers
`;

export const roomFields = `
  shareId
  participants {
    ${participantFields}
  }
  question {
    from
    value
  }
  maxParticipants
  gameStage
  step
`;
