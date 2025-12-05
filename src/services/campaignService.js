const API_URL = "https://deploybackend-production-f46a.up.railway.app/api/campaigns";

export const getCampaigns = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createCampaign = async (data) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateCampaign = async (id, data) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteCampaign = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
