import { useState, useEffect } from "react";
import { getAllJobs } from "../utils";
import { JobInterface } from "../types/jobs";
import JobCard from "../components/jobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JobListing() {
  const [jobs, setJobs] = useState<Array<JobInterface>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllJobs({ setJobs, setLoading });
  }, []);
  console.log(jobs);
  return (
    <section className="">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <Input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2 w-full"
            />
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
          </div>
          <Button className="ml-4">Search</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>Loading...</>
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </main>
    </section>
  );
}
