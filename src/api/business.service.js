import api from "./axios";

export async function createBusiness(payload) {
  const res = await api.post("/business/businesses/", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
}

export async function getBusinesses() {
  const res = await api.get("/business/businesses/");
  return res.data;
}