import api from "./axios";

export async function createCategory(payload) {
  const res = await api.post("/admin/categories/", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
}

export async function getCategories() {
  const res = await api.get("/admin/categories/");
  return res.data;
}
