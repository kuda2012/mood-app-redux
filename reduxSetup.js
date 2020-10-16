const INITIAL_STATE = { mood: "😵" };

const moodChanger = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ANGRY":
      return { ...state, mood: action.payload };
    case "HAPPY":
      return { ...state, mood: action.payload };
    case "SAD":
      return { ...state, mood: action.payload };
    case "CONFUSED":
      return { ...state, mood: action.payload };
    default:
      return state;
  }
};
