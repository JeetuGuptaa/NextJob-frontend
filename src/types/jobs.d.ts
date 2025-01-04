export interface JobInterface {
  id?: string;
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

export interface JobFormInterface {
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
