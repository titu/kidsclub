import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

test("renders learn react link", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Data Analysis for Kids Club/i);
  expect(linkElement).toBeInTheDocument();
});
