import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  // ACt is deprecated so use waitFor instead for async calls like updating the state.
  // await act(async () =>
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //         <RestaurantMenu />
  //         <Cart />
  //       </Provider>
  //     </BrowserRouter>
  //   )
  // );

  await waitFor(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  // const accordionHeader = screen.getByText(/Crispy Veg Burger - ₹ 70/);

  // console.log("####", document.body.innerHTML);
  // fireEvent.click(accordionHeader);

  const accordionHeader = screen.getByText((content) => {
    return content.includes("Crispy Veg Burger");
  });
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(13);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  expect(
    screen.getByText("Your Cart is empty . Add items to your cart")
  ).toBeInTheDocument();
});
