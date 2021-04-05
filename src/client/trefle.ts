import fetch from 'node-fetch';

export const getPlants = async () => {
  const response = await fetch(
    `${process.env.TREFLE_API_BASE}/plants?token=${process.env.TREFLE_API_KEY}`,
  );
  const json = await response.json();
  return json;
};

export const getPlant = async ({ plantId }) => {
  const response = await fetch(
    `${process.env.TREFLE_API_BASE}/plants/${plantId}?token=${process.env.TREFLE_API_KEY}`,
  );
  const json = await response.json();
  return json;
};

export const searchPlant = async ({ search }) => {
  const response = await fetch(
    `${process.env.TREFLE_API_BASE}/plants/search?token=${process.env.TREFLE_API_KEY}&q=${search}`,
  );
  const json = await response.json();
  return json;
};
