import API from "../../../services/axios";

export const createScoreAPI = (data) => API.post("/game/score", data);

export const fetchScoresAPI = (userId) => API.get(`/game/score/${userId}`);

export const fetchSummeryAPI = (userId) => API.get(`/game/summary/${userId}`);

export const fetchProfileAPI = (userId) => API.get(`/profile/${userId}`);

export const createProfileAPI = (data) => API.post(`/profile`, data);

export const updateProfileAPI = (id, data) => API.patch(`/profile/${id}`, data);

export const getUserAPI = (id) => API.get(`/user/${id}`);

export const getMeAPI = () => API.get(`/auth/me`);

export const logoutUserAPI = () => API.post(`/auth/logout`);

export const updateUserAPI = (id, data) => API.patch(`/user/${id}`, data);
