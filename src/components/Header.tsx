import { Link } from "react-router";
import { Logo } from "../assets/logo";
import { FormSearch } from "./FormSearch";
import { AddList } from "@/assets/add-list";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-white/10 bg-gray-950/90 px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between">

        <Link to="/">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 text-primary text-cyan-500">
              <Logo />
            </div>
            <h1 className="text-white font-bold leading-tight tracking-tight" style={{fontSize: "25px"}}>CineData</h1>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/my-list">
            <div className="flex gap-1 items-center bg-gray-800 hover:bg-slate-800 rounded-md p-2 pr-3 transition-colors">
              <AddList />
              <span className="-mt-[1px] text-white text-sm font-medium">My List</span>
            </div>
          </Link>
          <FormSearch />
        </div>

      </div>
    </header>
  )
}