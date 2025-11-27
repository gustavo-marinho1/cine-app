import type { MovieType } from "@/lib/movie";

export const MovieDetails = ({data}: {data: MovieType}) => {
  return (
    <div className="w-full flex flex-col gap-10 items-start text-left mt-10 bg-[rgba(0,0,0,0.25)] p-4 pt-7 sm:p-5 sm:pt-8 lg:p-6 lg:pt-9 rounded-lg">
      <Detail title="Plot" description={data.Plot} />
      <Detail title="Director" description={data.Director} />
      <Detail title="Writer" description={data.Writer} />
      <Detail title="Actors" description={data.Actors} />
      <Detail title="Awards" description={data.Awards} />
      <Detail title="BoxOffice" description={data.BoxOffice} />
    </div>
  )
}

const Detail = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-xl font-bold text-white mb-4 leading-[0]">{title}</h2>
      <p className="text-md text-gray-300 leading-relaxed leading-[0]">{description}</p>
    </div>
  )
}