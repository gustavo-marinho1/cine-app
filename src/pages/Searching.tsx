import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { useNavigate, useParams } from "react-router";
import { type ItemSearch, searchMovies } from "../lib/search";
import { SearchListing } from "../components/SearchListing";
import { SearchEmpty } from "../components/SearchEmpty";
import { SearchLoading } from "../components/SearchLoading";

export const Searching = () => {

  const navigate = useNavigate();
  const { s } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const [items, setItems] = useState<ItemSearch[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (s) {
      setSearch(s);
    }
    else {
      navigate("/");
    }
  }, [s]);

  useEffect(() => {
    if (search.length > 0) getResults();
  }, [search, page]);

  const changePage = (p: number) => {
    if (loading) return;
    setPage(p);
  }

  const getResults = async () => {
    if (loading) return;
    setLoading(true);

    const res = await searchMovies(search, page);
    if (res.Response) {
      setItems(res.Search ?? []);
      setTotal(res.totalResults);
    }

    setLoading(false);
  }

  return (
    <div className="w-full h-full flex flex-col items-start gap-6">

      {(items.length > 0) && (
        <div className="w-full flex flex-col items-start">
          <h2 className="text-white dark:text-white text-2xl font-bold leading-tight tracking-tight">Results</h2>
          <p className="text-gray-300 dark:text-gray-400 text-sm">Page {page}</p>
        </div>
      )}

      {loading ? (
        <SearchLoading />
      ) : (
        (items.length > 0) ? (
          <>
            <SearchListing items={items} />

            <Pagination
              page={page}
              totalPages={Math.ceil(total / 10)}
              changePage={changePage}
              disabled={loading}
            />
          </>
        ) : (
          <SearchEmpty />
        )
      )}
      
    </div>
  )
}