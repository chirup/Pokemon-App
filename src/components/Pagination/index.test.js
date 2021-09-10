import { render, screen, waitFor } from "@testing-library/react";
import Pagination from "./index.jsx";

test("renders learn react link", async () => {
  render(
    <Pagination
      previous={null}
      next={"https://pokeapi.co/api/v2/pokemon?offset=50&limit=50"}
      setUrl={() => {}}
      url={"https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"}
    />
  );
  const linkElement = await waitFor(() => screen.getByTestId("pagination"));
  expect(linkElement).toBeInTheDocument();
});
