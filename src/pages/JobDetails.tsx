import { JobInterface } from "../types/jobs";
import { useState, useEffect } from "react";

export default function JobDetails() {
  const [job, setJob] = useState<JobInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <section className="w-3/5 bg-white mx-auto min-h-screen border shadow-sm p-8">
      {loading ? <>Loading...</> : <>Job Details</>}
    </section>
  );
}
