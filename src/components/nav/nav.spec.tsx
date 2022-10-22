import { render, screen } from "@testing-library/react";
import Nav from "./nav";

describe("nav component", () => {
  it("should render without crashing", () => {
    render(<Nav />);
    screen.getByText(/home/i);
  });
});
