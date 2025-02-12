import axios from "axios";
import { JobFormInterface } from "../types/jobs";
import { SERVER_BASE_URL } from "@/utils/constant";

const jobsService = {
  createJob: async ({ payload }: { payload: JobFormInterface }) => {
    const res = await axios.post(`${SERVER_BASE_URL}/v1/jobs/create`, payload);
    return res?.data;
  },
  getJobs: async () => {
    const res = await axios.get(`${SERVER_BASE_URL}/v1/jobs/all-jobs`);
    return res?.data;
  },
  getJob: async ({ id }: { id: string | undefined }) => {
    const res = await axios.get(`${SERVER_BASE_URL}/v1/jobs/${id}`);
    return res?.data;
  },
  handleAnalytics: async ({ jobId }: { jobId: string }) => {
    const res = await axios.get(
      `${SERVER_BASE_URL}/v1/jobs/increment-views/${jobId}`
    );
    return res?.data;
  },
};

export { jobsService };
