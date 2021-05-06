import axios from "axios";
import { Onboarding } from "../../types/heystaxx/onboarding";
import config from "../../config";

// A mock function to mimic making an async request for data
export async function postOnboarding(onboarding: Onboarding): Promise<{profileId: string}> {
  const response = await axios.post(`${config.heystaxxApiUri}/profile`, onboarding);
  return response.data;
}
