async function crewLoader() {
  try {
    const res = await fetch("data.json");
    const { crew } = await res.json();
    return crew;
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
  }
}

export default crewLoader;
