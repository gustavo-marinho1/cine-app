import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { type MovieType, searchMovieById } from "../lib/movie";
import { MovieNotFound } from "../components/MovieNotFound";
import { MovieTopInfo } from "@/components/MovieTopInfo";
import { MovieTopPoster } from "@/components/MovieTopPoster";
import { MovieDetails } from "@/components/MovieDetails";
import { addToMyList, removeFromMyList, type ItemMyList } from "@/lib/cineSliceMyList";
import { useDispatch, useSelector } from "react-redux";
import { addToMyHistory, type ItemHistory } from "@/lib/cineSliceHistory";
import { MovieLoading } from "@/components/MovieLoading";

export const Movie = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const [data, setData] = useState<MovieType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [addedToFav, setAddedToFav] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  // @ts-ignore
  const myList: ItemMyList[] = useSelector((state) => state.myList.myList);
  // @ts-ignore
  const myHistory: ItemHistory[] = useSelector((state) => state.myHistory.myHistory);

  useEffect(() => {
    if (imdbID) {
      getMovie(imdbID);
    }
    else {
      navigate("/");
    }
  }, [imdbID]);

  useEffect(() => {
    if (!data) return
    // checking my list
    checkIsInMyList(data.imdbID);
    // add to history
    dispatch(
      addToMyHistory({
        Poster: data.Poster,
        Title: data.Title,
        imdbID: data.imdbID
      })
    );
  }, [data]);

  useEffect(() => {
    if (data) {
      checkIsInMyList(data.imdbID);
    }
  }, [myList]);

  const getMovie = async (i: string) => {
    setLoading(true);
    const m = await searchMovieById(i);
    if (m.Response === "True") {
      setData(m);
    }
    else {
      setNotFound(true);
    }
    setLoading(false);
  }

  const checkIsInMyList = (imdbID: string) => {
    const isInMyList = myList.find(item => item.imdbID === imdbID);
    if (isInMyList) {
      setAddedToFav(true);
    }
    else {
      setAddedToFav(false);
    }
  }

  const addRemoveFav = () => {
    if (!data) return;
    if (addedToFav) {
      // remove from myList
      dispatch(
        removeFromMyList(data.imdbID)
      );
    }
    else {
      // add to myList
      dispatch(
        addToMyList({
          Poster: data.Poster,
          Title: data.Title,
          imdbID: data.imdbID
        })
      );
    }
  };

  return (
    <div className="w-full h-full">
      
      {loading ? (
        <MovieLoading />
      ) : (
        <>

          {data && (
            <div className="w-full flex flex-col">

              <section className="w-full relative flex items-center justify-center">
                <div className="relative w-full">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-3/7 xl:w-2/7">
                      <MovieTopPoster poster={data.Poster} />
                    </div>
                    <div className="w-full md:w-4/7 xl:w-5/7 md:mt-4 lg:mt-10 flex flex-col gap-6">
                      <MovieTopInfo
                        data={data}
                        addedToFav={addedToFav}
                        addRemoveFav={addRemoveFav}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="w-full">
                <MovieDetails data={data} />
              </section>

            </div>
          )}

          {notFound && (
            <MovieNotFound />
          )}

        </>
      )}

    </div>
  )
}