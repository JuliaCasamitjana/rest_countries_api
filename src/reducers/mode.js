export default (state = "light", action) => {
  switch (action.type) {
    case "SWITCH":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};
