/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Ingredient from "../Ingredient";

test("displays Ingredient with its name", async () => {
  const component = render(<Ingredient name="woda" />);

  const pEl: HTMLParagraphElement = await component.findByTestId("name");
  expect(pEl.innerHTML).toContain("woda");
});
