async function technologyLoader() {
  try {
    const res = await fetch("data.json");
    const { technology } = await res.json();
    return technology;
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
  }
}

export default technologyLoader;
