import API from "../../../services/axios";

export const createScoreAPI = (data) => API.post("/game/score", data);

export const fetchScoresAPI = () => API.get("/game/score");

export const fetchSummeryAPI = () => API.get("/game/summary");
