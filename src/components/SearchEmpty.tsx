import { SearchIcon } from "../assets/search-icon"

export const SearchEmpty = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center text-white gap-0">

      <div className="mb-5">
        <SearchIcon width="50" height="50" />
      </div>

      <h3 className="text-lg font-medium">No result found</h3>

      <p className="text-gray-400 max-w-sm">
        We can't find any item matching your search
      </p>

    </div>
  )
}