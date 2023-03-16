import axios from "axios";

const api = process.env.APP_BACKEND_URL;

export async function createPatient(payload) {
  return await axios.post(`${api}/patient/new`, payload);
}
