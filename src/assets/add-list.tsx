export const AddList = ({added, size}: {added?: boolean, size?: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" color="white" className={size ?? "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 21L12 17.25 6.5 21V4.5a2.25 2.25 0 012.25-2.25h6.5A2.25 2.25 0 0117.5 4.5v16.5z" fill={added ? "white" : undefined} />
    </svg>
  )
}