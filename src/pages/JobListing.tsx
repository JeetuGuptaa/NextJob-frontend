import { useState, useEffect } from "react";
import { getAllJobs } from "../utils";
import { JobPayload } from "../types/jobs";

export default function JobListing() {
  const [jobs, setJobs] = useState<Array<JobPayload>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllJobs({ setJobs, setLoading });
  }, []);
  console.log(jobs);
  return (
    <section>
      <h1>Jobs Here</h1>
    </section>
  );
}
