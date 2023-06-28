export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "19ed93a3ddmsh3f7ad36a62a380ep138e1fjsne9e0d618f2cc",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
    headers: headers
  });

  const result = await response.json();

  return result;
}
