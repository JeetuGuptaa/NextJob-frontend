import { useState, useEffect } from "react";
import { getAllJobs } from "../utils";
import { JobInterface } from "../types/jobs";
import JobCard from "../components/jobCard";

export default function JobListing() {
  const [jobs, setJobs] = useState<Array<JobInterface>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllJobs({ setJobs, setLoading });
  }, []);
  console.log(jobs);
  return (
    <section className="w-4/5 mx-auto flex flex-wrap gap-8 justify-between mt-8">
      {loading ? (
        <>Loading</>
      ) : (
        jobs.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })
      )}
    </section>
  );
}
