import { features } from "@/lib/features"
import { CardFeatured } from "./CardFeatured"
import { Link } from "react-router"

export const Features = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Link to={`/movie/${feature.imdbID}`} key={index}>
          <CardFeatured
            imageUrl={feature.Poster}
            title={feature.Title}
          />
        </Link>
      ))}
    </div>
  )
}