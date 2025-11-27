import type React from "react";
import { ChevronLeft } from "../assets/chevron-left";
import { ChevronRight } from "../assets/chevron-right";

interface Props {
  page: number,
  totalPages: number,
  changePage: (p: number) => void,
  disabled: boolean
}

export const Pagination = ({page, totalPages, changePage, disabled}: Props) => {

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const showEllipsisLeft = page >= 4;
  const showEllipsisRight = totalPages > (page + 2);

  const goPrevPage = () => {
    if (disabled) return;
    changePage(page - 1);
  }

  const goNextPage = () => {
    if (disabled) return;
    changePage(page + 1);
  }

  const goFirstPage = () => {
    if (disabled) return;
    changePage(1);
  }

  const goLastPage = () => {
    if (disabled) return;
    changePage(totalPages);
  }

  return (
    <div className="w-full h-fit mt-8 flex justify-center">
      <nav aria-label="Pagination" className="flex items-center gap-2">

        {!isFirstPage && (
          <Btn fn={goPrevPage}>
            <ChevronLeft />
          </Btn>
        )}

        {page >= 3 && (
          <Btn fn={goFirstPage}>1</Btn>
        )}

        {showEllipsisLeft && (
          <Ellipsis />
        )}

        {!isFirstPage && (
          <Btn fn={goPrevPage}>{page - 1}</Btn>
        )}

        <Current>{page}</Current>

        {!isLastPage && (
          <Btn fn={goNextPage}>{page + 1}</Btn>
        )}

        {showEllipsisRight && (
          <Ellipsis />
        )}

        {page <= (totalPages - 2) && (
          <Btn fn={goLastPage}>{totalPages}</Btn>
        )}

        {!isLastPage && (
          <Btn fn={goNextPage}>
            <ChevronRight />
          </Btn>
        )}

      </nav>
    </div>
  )
}

const Current = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#414141] text-white size-9 rounded-lg flex items-center justify-center">{children}</div>
  )
}

const Ellipsis = () => {
  return (
    <div className="bg-[#212121] text-white size-9 rounded-lg flex items-center justify-center">...</div>
  )
}

const Btn = ({children, fn}: { children: React.ReactNode, fn?: () => void }) => {
  const handleClick = () => {
    if (fn) fn();
  }
  return (
    <button
      aria-current="page"
      className="flex items-center justify-center size-9 rounded-lg text-sm font-medium text-white ring-none"
      style={{ backgroundColor: "#212121", padding: "8px" }}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}