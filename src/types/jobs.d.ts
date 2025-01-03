export interface JobReqPayload {
  role: string;
  desc: string;
  salary?: string;
  location?: string;
  jobType?: string;
  workMode?: string;
  req?: [string];
  exp?: string;
  applyLink?: string;
  date?: string;
  res?: [string];
  company: string;
  slug: string;
}

export interface JobPayload {
  role: string;
  desc: string;
  salary?: string;
  location?: string;
  jobType?: string;
  workMode?: string;
  req?: string;
  exp?: string;
  applyLink?: string;
  date?: string;
  res?: string;
  company: string;
  slug: string;
}
