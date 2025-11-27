import type { ItemHistory } from "@/lib/cineSliceHistory";
import { useSelector } from "react-redux";
import { CardHistory } from "./CardHistory";
import { useNavigate } from "react-router";
import { HistoryEmpty } from "./HistoryEmpty";

export const HistoryList = () => {

  const navigate = useNavigate();

  // @ts-ignore
  const myHistory: ItemHistory[] = useSelector((state) => state.myHistory.myHistory);

  const handleClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
  }

  return (
    <>

      {(myHistory.length > 0) ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {myHistory.map((h, index) => (
            <div key={index} onClick={() => handleClick(h.imdbID)}>
              <CardHistory
                title={h.Title}
                imageUrl={h.Poster}
              />
            </div>
          ))}
        </div>
      ) : (
        <HistoryEmpty />
      )}

    </>
  )
}