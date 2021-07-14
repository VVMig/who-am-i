export const participantFields = `
  id
  displayName
  guessName
  isAdmin
  isFinish
  color
`;

export const roomFields = `
  shareId
  participants {
    ${participantFields}
  }
  maxParticipants
  gameStage
  nowNaming {
    ${participantFields}
  }
  nameSeter {
    ${participantFields}
  }
`;
