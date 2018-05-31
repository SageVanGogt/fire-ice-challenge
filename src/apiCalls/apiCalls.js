export const fetchHouses = async () => {
  const url = `http://localhost:3001/api/v1/houses`;
  const response = await fetch(url);
  const houses = await response.json();
  return houses;
};

