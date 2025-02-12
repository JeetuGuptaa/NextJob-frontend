import { JobInterface } from "../types/jobs";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function JobCard({ job }: { job: JobInterface }) {
  const { role, salary, location, jobType, company, date, slug } = job;
  console.log(job);
  const navigate = useNavigate();
  let numOfDays: number = 0;
  console.log(date);
  if (date) console.log(new Date(date).getDay());
  console.log(new Date().getDay());
  if (date)
    numOfDays = Math.floor(
      (Number(new Date()) - Number(new Date(date))) / (24 * 60 * 60 * 1000)
    );
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{role}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm font-semibold mt-2">{salary}</p>
        <p className="text-sm text-gray-600 mt-1">{jobType}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {numOfDays > 0 ? `${numOfDays} days ago` : "Posted Recently"}
        </span>
        <Button
          variant="outline"
          onClick={() => {
            navigate(`/job/${slug}`);
          }}
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
}
