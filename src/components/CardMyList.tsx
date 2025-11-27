export const CardMyList = ({imageUrl, title}: {
  imageUrl: string,
  title: string
}) => {

  return (
    <div className="w-full aspect-2/3 group relative overflow-hidden rounded-xl cursor-pointer" data-alt={`Movie poster for ${title}`}>

      <div className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102">
        <img alt={`Movie poster for ${title}`} src={imageUrl} className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3 text-white">
        <h3 className="font-bold text-sm">{title}</h3>
      </div>

    </div>
  )
}