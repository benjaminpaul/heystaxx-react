import axios from "axios";
import config from "../../config";
import { Industry } from "../../types";

// A mock function to mimic making an async request for data
export async function getIndustries(): Promise<Industry[]> {
  const response = await axios.get(`${config.heystaxxApiUri}/lookup/industries`);
  return response.data.industries;
}
