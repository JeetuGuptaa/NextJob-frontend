import { jobsService } from "../service";
import { JobPayload, JobReqPayload } from "../types/jobs";

export const formatPayload = ({ jobObj }: { jobObj: JobPayload }) => {
  return {
    role: jobObj?.role?.trim(),
    desc: jobObj?.desc?.trim(),
    salary: jobObj?.salary?.trim(),
    location: jobObj?.location?.trim(),
    jobType: jobObj?.jobType,
    workMode: jobObj?.workMode,
    req: jobObj?.req?.split("\n"),
    exp: jobObj?.exp?.trim(),
    applyLink: jobObj?.applyLink?.trim(),
    date: jobObj?.date?.trim(),
    res: jobObj?.res?.split("\n"),
    company: jobObj?.company?.trim(),
    slug: jobObj?.slug?.trim(),
  };
};

export const createJob = async ({ payload }: { payload: JobReqPayload }) => {
  const res = await jobsService.createJob({ payload });
  if (res?.success) {
    console.log("Posted SUccessfully");
  } else {
    console.log(res ? res.message : "Error");
  }
};

export const getAllJobs = async ({
  setJobs,
  setLoading,
}: {
  setJobs: (jobs: Array<JobPayload>) => void;
  setLoading: (bool: boolean) => void;
}) => {
  const res = await jobsService.getJobs();
  if (res?.success) {
    const { jobs } = res.data;
    setJobs(jobs);
  } else {
    console.log(res ? res.message : "Error");
  }
  setLoading(false);
};
