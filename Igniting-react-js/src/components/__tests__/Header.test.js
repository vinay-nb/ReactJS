import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
  );
});

test("Cart should be zero", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart-items");
  expect(cart.innerHTML).toBe('<a href="/cart">Cart 2</a>');
});
