// FILEPATH: /Users/anchal.arora/Documents/NamasteReact/react-web-app/src/components/__tests__/Body.test.js

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

// Mock the fetch function to return a Promise that resolves with a JSON object
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: [
                        {
                          info: {
                            name: "Test Restaurant",
                            avgRating: 4.5,
                            id: "1",
                            promoted: false,
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

describe("Body Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  it("should render without crashing", () => {
    expect(
      screen.getByPlaceholderText("Search Restaurants...")
    ).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Top Rated Restaurants")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("should display restaurants after fetching data", async () => {
    await waitFor(() =>
      expect(screen.getByText("Test Restaurant")).toBeInTheDocument()
    );
  });

  it("should filter restaurants based on search text", async () => {
    const searchInput = screen.getByPlaceholderText("Search Restaurants...");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "Test" } });
    fireEvent.click(searchButton);

    await waitFor(() =>
      expect(screen.getByText("Test Restaurant")).toBeInTheDocument()
    );
  });

  it("should filter restaurants based on rating", async () => {
    const topRatedButton = screen.getByText("Top Rated Restaurants");

    fireEvent.click(topRatedButton);

    await waitFor(() =>
      expect(screen.getByText("Test Restaurant")).toBeInTheDocument()
    );
  });
});
