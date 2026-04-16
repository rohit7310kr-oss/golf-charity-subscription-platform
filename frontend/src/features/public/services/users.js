import API from "../../../services/axios";

export const createUserAPI = (data) => API.post("/api/v1/user", data);
