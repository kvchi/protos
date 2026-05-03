import api from "./axios";

export async function createBusiness(payload) {
  const res = await api.post("/business/businesses/", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
}

