// src/utils/api.js
import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const getProyectos = async () => {
	const res = await axios.get(`${API_URL}/proyectos?populate=*`);
	return res.data.data;
};
