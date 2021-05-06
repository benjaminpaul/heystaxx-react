import axios from "axios";
import config from "../../config";
import { Country } from "../../types";

// A mock function to mimic making an async request for data
export async function getCountries(): Promise<Country[]> {
  const response = await axios.get(`${config.heystaxxApiUri}/lookup/countries`);
  return response.data.countries;
}
