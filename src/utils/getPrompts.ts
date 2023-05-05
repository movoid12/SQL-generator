const getQuery = async () => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "create a table",
      }),
    };

    const response = await fetch("http://localhost:8000/completions", options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getQuery;
