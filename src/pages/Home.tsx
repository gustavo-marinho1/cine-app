import { HistoryList } from "@/components/HistoryList";
import { Features } from "@/components/Features";

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-12">

      <section>
        <h2 className="text-white text-2xl font-bold leading-tight tracking-tight pb-4">Featured</h2>
        <Features />
      </section>

      <section>
        <h3 className="text-white text-xl font-bold leading-tight tracking-tight pb-2">Search history</h3>
        <HistoryList />
      </section>

    </div>
  )
}