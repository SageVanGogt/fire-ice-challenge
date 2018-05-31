export const fetchHouses = () => {
  const url = `http://localhost:3001/api/v1/houses`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => err.message)
};

export const fetchSwornMember = async (memberId) => {
  const url = `http://localhost:3001/api/v1/character/${memberId}`;
  const response = await fetch(url);
  const member = await response.json();
  return member;
};