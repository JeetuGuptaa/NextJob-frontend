import { jobsService } from "../service";
import { JobPayload } from "../types/jobs";

export const createJob = async ({ payload }: { payload: any }) => {
  const res = await jobsService.createJob({ payload });
  if (res?.success) {
    console.log("Posted SUccessfully");
  } else {
    console.log(res ? res.message : "Error");
  }
};

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
