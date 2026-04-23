import API from "../../../services/axios";

export const createUserAPI = (data) => API.post("/user", data);
