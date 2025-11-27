import { useNavigate } from "react-router"
import type { ItemSearch } from "../lib/search"
import { CardSearch } from "./CardSearch"

export const SearchListing = ({items}: {items: ItemSearch[]}) => {

  const navigate = useNavigate();

  const handleClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
  }

  return (
    <>
      {(items.length > 0) && (

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map(item => (
            <div key={item.imdbID} onClick={() => handleClick(item.imdbID)}>
              <CardSearch
                imageUrl={item.Poster}
                title={item.Title}
                description={item.Year}
              />
            </div>
          ))}
        </div>

      )}
    </>
  )
}