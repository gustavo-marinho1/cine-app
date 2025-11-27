import { LoadingCircle } from "../assets/loading-circle"

export const MovieLoading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center text-white">
      <div className="flex flex-col gap-4 items-center">
        
        <div className="flex-shrink-0">
          <LoadingCircle />
        </div>
        
        <h3 className="text-lg font-medium">Loading</h3>

      </div>
    </div>
  )
}