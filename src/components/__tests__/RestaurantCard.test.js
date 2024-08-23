import { render, screen, fireEvent } from "@testing-library/react";

import RestaurantCard, { withPromotedRestaurantCard } from "../RestaurantCard";

import MOCKDATA from "../mocks/resCardMock.json";

import "@testing-library/jest-dom";

const PromotedRestaurantCard = withPromotedRestaurantCard(RestaurantCard);

test("render RestaurantCard comp with props", () => {
  render(<RestaurantCard restaurant={MOCKDATA} />);

  const resName = screen.getByText("Cafe Amudham");

  expect(resName).toBeInTheDocument();
});

test("render RestaurantCard comp with Promoted Label", () => {
  render(<PromotedRestaurantCard restaurant={MOCKDATA} />);

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();

  const resName = screen.getByText("Cafe Amudham");
  expect(resName).toBeInTheDocument();
});
