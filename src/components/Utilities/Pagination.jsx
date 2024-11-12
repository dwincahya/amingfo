import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from "react-icons/fa";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page > 1 && (
        <>
          <button
            onClick={handleFirstPage}
            className="transition-all hover:text-color-accent"
          >
            <FaAngleDoubleLeft />
          </button>

          <button
            onClick={handlePrevPage}
            className="transition-all hover:text-color-accent"
          >
            <FaAngleLeft />
          </button>
        </>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page < lastPage && (
        <>
          <button
            onClick={handleNextPage}
            className="transition-all hover:text-color-accent"
          >
            <FaAngleRight />
          </button>

          <button
            onClick={handleLastPage}
            className="transition-all hover:text-color-accent"
          >
            <FaAngleDoubleRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
