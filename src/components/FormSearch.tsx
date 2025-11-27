import { useNavigate } from "react-router";
import { SearchIcon } from "../assets/search-icon";
import { useState } from "react";

export const FormSearch = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const changeSearch = (s: string) => {
    setSearch(s);
  }

  const handleSearch = () => {
    if (search.length > 0) navigate(`/search/${search}`);
  }

  return (
    <form className="flex flex-1 items-center justify-end gap-4" onSubmit={e => { e.preventDefault(); handleSearch(); }}>
      <label className="relative hidden w-full max-w-xs sm:block">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon width="20" height="20" />
        </span>
        <input
          className={`
            form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-white/5 pl-10 text-white placeholder:text-gray-400
            focus:outline-none h-10 px-4 text-sm font-normal leading-normal border border-gray-700 focus:border-gray-500
          `}
          placeholder="Search..."
          value={search}
          onChange={e => changeSearch(e.target.value)}
        />
      </label>
    </form>
  )
}