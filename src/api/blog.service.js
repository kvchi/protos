import api from "./axios";

export async function getBlogs() {
    // Add 'await' here so 'res' actually contains the response object
    const res = await api.get("/blog/blogs/");
    
    // Now res.data will exist
    return res.data;
}