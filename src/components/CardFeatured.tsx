export const CardFeatured = ({imageUrl, title}: {
  imageUrl: string,
  title: string
}) => {

  return (
    <div className="group relative flex w-full aspect-[2/3] flex-shrink-0 flex-col overflow-hidden rounded-xl shadow-lg transition-transform duration-300 cursor-pointer">

      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        data-alt={`Movie poster for ${{title}}`}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 hover:from-black/15 to-transparent" />

      <div className="relative mt-auto flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

    </div>
  )
}