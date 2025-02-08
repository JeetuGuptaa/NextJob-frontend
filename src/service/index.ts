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
  getJob: async ({ id }: { id: string }) => {
    const res = await axios.get(`http://localhost:3000/v1/jobs/${id}`);
    return res?.data;
  },
  handleAnalytics: async ({ jobId }: { jobId: string }) => {
    const res = await axios.get(
      `http://localhost:3000/v1/jobs/increment-views/${jobId}`
    );
    return res?.data;
  },
};

export { jobsService };
