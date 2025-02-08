import { useEffect } from "react";
import { handleAnalytics } from "@/utils";
export default function HandleAnalytics({ jobId }: { jobId: string }) {
  useEffect(() => {
    handleAnalytics({ jobId });
  }, []);
  return <></>;
}
