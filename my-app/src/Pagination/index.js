import { useEffect, useState } from "react";

export function Pagination(props) {
  const { totalItems, pagesAmount, selectPage } = props;
  const [totalPages] = useState(totalItems);
  const [pagesArray, setPagesArray] = useState([]);
  const [indexPosition, setIndexPosition] = useState(0);

  useEffect(() => {
    const array = [];
    for (let i = 1; i <= totalPages; i++) {
      array.push(i);

      if (i === totalPages) {
        setDivisionArray(array);
      }
    }
  }, []);

  function paginate(array) {
    return array.reduce((accumulator, value, index) => {
      let idx = Math.floor(index / pagesAmount);
      let page = accumulator[idx] || (accumulator[idx] = []);
      page.push(value);

      return accumulator;
    }, []);
  }

  function setDivisionArray(array) {
    const arrayWithDivision = paginate(array);
    setPagesArray(arrayWithDivision);
  }

  function previousPages() {
    setIndexPosition(indexPosition - 1);
  }

  function nextPages() {
    setIndexPosition(indexPosition + 1);
  }

  function disablePreviou() {
    return indexPosition == 0;
  }

  function disableNext() {
    const division = totalPages / 3;
    return indexPosition == Math.ceil(division);
  }

  function pageClicked(page) {
    selectPage(page);
  }

  return (
    <nav
      className="d-flex justify-content-center align-items-center vh-100"
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={previousPages}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {pagesArray &&
          pagesArray[indexPosition]?.map((x, i) => (
            <li className="page-item" key={i} onClick={() => pageClicked(x)}>
              <a href="javascript:void(0)" className="page-link">
                {x}
              </a>
            </li>
          ))}

        <li className="page-item">
          <button className="page-link" aria-label="Next" onClick={nextPages}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
