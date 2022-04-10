const testFetch = async (signal) => {
  try {
    let response = await fetch("http://localhost:8080/", {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.error(err);
    console.log(err);
  }
};

const getAllTours = async (signal) => {
  try {
    let response = await fetch("http://localhost:8080/api/v1/tours/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export { testFetch, getAllTours };
