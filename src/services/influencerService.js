const API_URL = "https://deploybackend-production-f46a.up.railway.app/api/influencers";

export const getInfluencers = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createInfluencer = async (data) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateInfluencer = async (id, data) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteInfluencer = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
