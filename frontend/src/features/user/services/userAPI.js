import API from "../../../services/axios";

export const createScoreAPI = (data) => API.post("/game/score", data);

export const fetchScoresAPI = () => API.get("/game/score");

export const fetchSummeryAPI = () => API.get("/game/summary");

export const fetchProfileAPI = (userId) => API.get(`/profile/${userId}`);

export const createProfileAPI = (data) => API.post(`/profile`, data);

export const updateProfileAPI = (id, data) => API.patch(`/profile/${id}`, data);

export const getUserAPI = (id) => API.get(`/user/${id}`);

export const updateUserAPI = (id, data) => API.patch(`/user/${id}`, data);
