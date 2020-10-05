function handler(action, state) {
  if (action === "INCREMENT") {
    return state + 1;
  } else {
    return state;
  }
}

export default handler;