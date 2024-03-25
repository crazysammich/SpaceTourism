async function destinationLoader() {
  try {
    const res = await fetch("data.json");
    const { destinations } = await res.json();
    return destinations;
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
  }
}

export default destinationLoader;
