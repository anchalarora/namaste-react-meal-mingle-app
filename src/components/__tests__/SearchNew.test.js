import { render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";

// Mock global fetch to return an empty array to simulate no restaurants found
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {
              card: {
                card: { gridElements: { infoWithStyle: { restaurants: [] } } },
              },
            },
          ],
        },
      }),
  })
);

describe("Body Component", () => {
  test("should render without crashing", () => {
    render(
      <Router>
        <Body />
      </Router>
    );
  });

  test("should render search input and button", async () => {
    render(
      <Router>
        <Body />
      </Router>
    );

    // Wait for the fetch to complete
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Wait for the search input and button to appear in the document
    const searchInput = await screen.findByPlaceholderText(
      "Search Restaurants..."
    );
    const searchButton = await screen.findByTestId("searchButton");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("should call fetch on render", async () => {
    render(
      <Router>
        <Body />
      </Router>
    );

    // Wait for the fetch to complete
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });
});
