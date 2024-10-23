import JobSearchForm from "./JobSearchForm"

export default function Home() {
  return (
    <div className="mx-auto size-full min-h-[90vh] p-4">
      <h1 className="mb-8 text-3xl font-bold text-primary">
        Create Job Search Query
      </h1>
      <JobSearchForm />
    </div>
  )
}
