import axios from "axios";
import { JobInterface } from "../types/jobs";

const jobsService = {
  createJob: async ({ payload }: { payload: JobInterface }) => {
    const res = await axios.post(
      "http://localhost:3000/v1/jobs/create",
      payload
    );
    return res?.data;
  },
  getJobs: async () => {
    const res = await axios.get("http://localhost:3000/v1/jobs/all-jobs");
    return res?.data;
  },
};

export { jobsService };
