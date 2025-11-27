import { CardMyList } from "@/components/CardMyList";
import { MyListEmpty } from "@/components/MyListEmpty";
import type { ItemMyList } from "@/lib/cineSliceMyList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const MyList = () => {

  const navigate = useNavigate();

  // @ts-ignore
  const myList: ItemMyList[] = useSelector((state) => state.myHistory.myHistory);

  const handleClick = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
  }

  return (
    <div className="w-full h-full flex flex-col items-start gap-6">

      <div className="w-full flex flex-col items-start">
        <h2 className="text-white dark:text-white text-2xl font-bold leading-tight tracking-tight">My List</h2>
      </div>
      
      {(myList.length > 0) ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {myList.map((item, index) => (
            <div key={index} onClick={() => handleClick(item.imdbID)}>
              <CardMyList
                imageUrl={item.Poster}
                title={item.Title}
              />
            </div>
          ))}
        </div>
      ) : (
        <MyListEmpty />
      )}
      
    </div>
  )
}