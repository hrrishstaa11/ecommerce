import { CartState } from "../context/Context";
import Ratings from "./Ratings";
const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();
  
  return (
    <div className=" ">
      <aside
        class=" w-40 h-[40vh] lg:h-[100%] lg:w-64 bg-primary mt-[16vh] lg:mt-2 py-3 h-[90vh] inline-block flex flex-col lg:fixed"
        aria-label="Sidebar"
      >
        <h1 className="ml-3 ">Filter Products</h1>
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul class="w-48 text-sm font-medium text-gray-900 rounded-lg dark:bg-gray-700  dark:text-white">
            <li class="w-full rounded-t-lg  border-gray-200 dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="list-radio-acending"
                  type="radio"
                  value=""
                  name="list-radio"
                  onChange={() =>
                    productDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "lowToHigh",
                    })
                  }
                  checked={sort === "lowToHigh" ? true : false}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="list-radio-license"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 "
                >
                  Ascending{" "}
                </label>
              </div>
            </li>
            <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="list-radio-descending"
                  type="radio"
                  value=""
                  name="list-radio"
                  onChange={() =>
                    productDispatch({
                      type: "SORT_BY_PRICE",
                      payload: "HighToLow",
                    })
                  }
                  checked={sort === "HighToLow" ? true : false}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="list-radio-id"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Descending
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* ------------------------------------------------------------------------------------------------
         */}
       

        {/* <span className=" flex ml-5">
          <label className="text-white">Rating</label>
          <Ratings
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </span> */}
        <button className=" w-[90%] mt-4 self-center border border-1  bg-none  text-white border-white py-1 px-5 text-[18px] rounded-[8px] mt-[30px ]  hover:bg-white shadow-2xl hover:text-primary hover:m-1 hover:shadow-black hover:shadow-2xl "
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
        >
          Clear Filters{" "}
        </button>
      </aside>
    </div>
  );
};

export default Filters;
