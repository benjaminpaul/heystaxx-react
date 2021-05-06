import axios from "axios";
import config from "../../config";
import { Timezone } from "../../types";

// A mock function to mimic making an async request for data
export async function getTimezones(): Promise<Timezone[]> {
  const response = await axios.get(`${config.heystaxxApiUri}/lookup/timezones`);
  return response.data.timezones;
}
