import "./App.css";
import { Pagination } from "./Pagination";

const json = {
  size: 30,
  totalItems: 208,
  page: 1,
  total: 7,
};

function App(props) {
  function triggerRequest(page) {
    console.log(`A request será disparada para a página ${page}`);
  }

  return (
    <>
      <Pagination
        totalItems={json.totalItems}
        pagesAmount={3}
        selectPage={(page) => {
          triggerRequest(page);
        }}
      />
    </>
  );
}

export default App;
