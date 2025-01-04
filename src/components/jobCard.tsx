import { JobInterface } from "../types/jobs";
import { useNavigate } from "react-router";

export default function JobCard({ job }: { job: JobInterface }) {
  const { role, salary, location, jobType, company, date, slug } = job;
  const navigate = useNavigate();

  return (
    <div className="border p-4 w-[30%] bg-white rounded-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex flex-col">
        <h2 className="font-semibold text-base">{role}</h2>
        <p className="text-xs font-medium text-secondary mb-2">{company}</p>
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-medium text-secondary">{salary}</p>
        <p className="font-semibold text-sm">{location}</p>
        <p className="text-sm font-medium text-secondary mb-2">{jobType}</p>
      </div>

      <div className="w-full flex justify-between items-center">
        <span className="text-sm font-medium text-secondary">2 days ago</span>
        <button
          onClick={() => {
            navigate(`/job/${slug}`);
          }}
          className="transition-all duration-200 border px-2 py-2 font-medium text-xs rounded-md hover:scale-[1.01]  active:scale-95 shadow-sm hover:border-black self-end"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
