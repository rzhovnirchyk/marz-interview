import { render, screen } from "@testing-library/react";
import PageError from "./PageError";

describe("PageError", () => {
  beforeEach(() => {});
  afterEach(() => {});
  it("rendersPageError", async () => {
    const errorMessage: string = "Test error message";
    render(<PageError message={errorMessage} />);
    expect(screen.getByTestId(`error-container`)).toBeInTheDocument();
    expect(screen.getByTestId(`error-container`).textContent).toBe(
      errorMessage
    );
  });
});
