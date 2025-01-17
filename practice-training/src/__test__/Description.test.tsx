import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Description from "../Components/Description/Description";

describe("Description Component", () => {
  test("renders with default props", () => {
    render(<Description descriptionText="Default Description" />);

    const descriptionElement = screen.getByText(/default description/i);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveStyle("color: grey");
    expect(descriptionElement).toHaveStyle("font-size: 15px");
    expect(descriptionElement.parentElement).toHaveStyle("display: flex");
    expect(descriptionElement.parentElement).toHaveStyle("flex-direction: row");
    expect(descriptionElement.parentElement).toHaveStyle("gap: 0.25rem");
  });

  test("renders with custom props", () => {
    render(
      <Description
        fontsize="lg"
        spacing={2}
        direction="column"
        color="blue"
        descriptionText="Custom Description"
      />,
    );

    const descriptionElement = screen.getByText(/custom description/i);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveStyle("color: blue");
    expect(descriptionElement).toHaveStyle("font-size: 25px");
    expect(descriptionElement.parentElement).toHaveStyle(
      "flex-direction: column",
    );
    expect(descriptionElement.parentElement).toHaveStyle("gap: 0.5rem");
  });

  test("matches the snapshot", () => {
    const { asFragment } = render(
      <Description
        fontsize="lg"
        spacing={2}
        direction="column"
        color="blue"
        descriptionText="Snapshot Description"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
