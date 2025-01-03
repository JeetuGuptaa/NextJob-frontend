import axios from "axios";
import { JobReqPayload } from "../types/jobs";

const jobsService = {
  createJob: async ({ payload }: { payload: JobReqPayload }) => {
    const res = await axios.post(
      "http://localhost:3000/v1/jobs/create",
      payload
    );
    return res?.data;
  },
};

export { jobsService };
