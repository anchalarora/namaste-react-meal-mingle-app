import Body from "../Body";
import { render, waitFor, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResturantListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// fetch function is given by browser , and js dom cant understand it. so we need to mock it.
// create mock fetch function, replace global.fetch.
// global object wherever it is rednered.

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// mock fetch function, it takes a callback fn => here we mock how fetch fun works.
// fetch fn returns a promise => so i will also return a promise.
// fetch fn resolves with a json  => so i create it
// json is a fn which returns a Promise.resolve once again, this promise once resolved has a data.

//we cannot make a api call(network call) from test , because it doesnt run on browser,
//it runs on jsdom which is just browser like env, not exact browser

// we need mock data for api response.

test("should render Body component with Search button", async () => {
  waitFor(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //const searchbutton = screen.getByRole("button", { name: "SearchBox" });

  //const searchButton = screen.getByTestId("searchButton");

  //expect(searchButton).toBeInTheDocument();
});

test("should render shimmer when restaurants are not available", () => {
  const { container } = render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  expect(container.querySelector(".shimmer")).toBeInTheDocument();
});

test("should render the search input field", async () => {
  // render(
  //   <BrowserRouter>
  //     <Body />
  //   </BrowserRouter>
  // );

  await waitFor(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Check if the input element is in the document by its placeholder text
  const searchInput = screen.getByPlaceholderText("Search Restaurants...");

  expect(searchInput).toBeInTheDocument();
});
