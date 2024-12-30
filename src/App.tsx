import { Routes, Route } from "react-router";
import JobListing from "./pages/JobListing";
import CreateJob from "./pages/CreateJob";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <>
      <h1 className="flex items-center">
        <img src="/nextJob-NBG.png" height="72" width="72" />
        <span className="font-medium text-4xl bg-gradient-to-br from-[#002642] via-[#2fb1df] to-[#002642] bg-clip-text text-transparent">
          NextJob
        </span>
      </h1>
      <Routes>
        <Route index element={<JobListing />} />
        <Route path="create" element={<CreateJob />} />
        <Route path="job/:id" element={<JobDetails />} />
      </Routes>
    </>
  );
}

export default App;

