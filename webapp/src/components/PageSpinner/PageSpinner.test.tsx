import { render, screen } from "@testing-library/react";
import PageSpinner from "./PageSpinner";

describe("PageSpinner", () => {
  beforeEach(() => {});
  afterEach(() => {});
  it("rendersPageSpinner", async () => {
    render(<PageSpinner />);
    expect(screen.getByTestId(`loading-spinner-container`)).toBeInTheDocument();
  });
});
