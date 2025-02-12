import { MapPin, Clock, DollarSign, Calendar } from "lucide-react";
import { JobInterface } from "../types/jobs";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getJobDetails } from "@/utils";
import { Button } from "antd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HandleAnalytics from "@/components/handleAnalyics";
import Loader from "@/components/loader";

export default function JobDescriptionPage() {
  let { id } = useParams();
  const [job, setJob] = useState<JobInterface>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getJobDetails({ id, setLoading, setJob });
  }, []);

  return (
    <div className="min-h-screen py-8 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{job.role}</CardTitle>
                <CardDescription className="text-xl">
                  {job?.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="mr-2 text-gray-500" />
                    <span>{job?.loc ? job.loc : "Not Disclosed"}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 text-gray-500" />
                    <span>{job?.salary ? job.salary : "Not disclosed"}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 text-gray-500" />
                    <span>{job?.jobType ? job.jobType : "Full Time"}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-gray-500" />
                    <span>Posted {"Recently"}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">Job Description</h3>
                <p className="mb-4">{job?.desc}</p>

                <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 mb-4">
                  {job?.res?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 mb-6">
                  {job?.req?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="w-full text-center">
                  <Button
                    type="text"
                    className="font-semibold p-4 text-sm w-full bg-primary border border-primary text-white "
                    onClick={() => {
                      window.open(job?.link);
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
            <HandleAnalytics jobId={id} />
          </>
        )}
      </div>
    </div>
  );
}
