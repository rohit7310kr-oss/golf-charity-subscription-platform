import API from "../../../services/axios";

export const createUserAPI = (data) => API.post("/auth/register", data);

export const loginUserAPI = (data) => API.post("/auth/login", data);
