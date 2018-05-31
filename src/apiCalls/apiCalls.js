export const fetchHouses = async () => {
  const url = `http://localhost:3001/api/v1/houses`;
  const response = await fetch(url);
  const houses = await response.json();
  return houses;
};

export const fetchSwornMember = async (memberId) => {
  const url = `http://localhost:3001/api/v1/character/${memberId}`;
  const response = await fetch(url);
  const member = await response.json();
  return member;
};