import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./screens/Root/Root";
import Registration from "./screens/Registration/Registration.tsx";
import SignIn from "./screens/SignIn/SignIn.tsx";
import Welcome from "./screens/Welcome/Welcome.tsx";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword.tsx";
import SalesPage from "./screens/Sales/Sales.tsx";
import Test from "./screens/Test/Test.tsx";
import NotFound from "./screens/NotFound/NotFound.tsx";
import ItemPage from "./screens/Item/Item.tsx";
import ItemCreatePage from "./screens/ItemCreate/ItemCreate.tsx";
import ItemEditPage from "./screens/ItemEdit/ItemEdit.tsx";
import RootItem from "./screens/RootItem/RootItem.tsx";
import CategoryPage from "./screens/Category/Category.tsx";
import CategoryCreatePage from "./screens/CategoryCreate/CategoryCreate.tsx";
import TicketPage from "./screens/Ticket/Ticket.tsx";
import ChargePage from "./screens/Charge/Charge.tsx";
import RootTicket from "./screens/RootTicket/RootTicket.tsx";
import GeneralPage from "./screens/General/General.tsx";
import RootSettings from "./screens/RootSettings/RootSettings.tsx";
import RootReceipt from "./screens/RootReceipt/RootReceipt.tsx";
import ShiftPage from "./screens/Shift/Shift.tsx";
import RefundPage from "./screens/Refund/Refund.tsx";
import ReceiptPage from "./screens/Receipts/Receipt.tsx";
import CashManagementPage from "./screens/CashManagement/CashManagement.tsx";
import PrintersPage from "./screens/Printers/Printers.tsx";
import CustomerDisplayPage from "./screens/CustomerDisplay/CustomerDisplay.tsx";
import TaxesDisplayPage from "./screens/TaxesDisplay/TaxesDisplay.tsx";
import CategoryEditPage from "./screens/CategoryEdit/CategoryEdit.tsx";
import SalePage from "./screens/Sale/Sale.tsx";
import FavoritesEditPage from "./screens/FavoritesEdit/FavoritesEdit.tsx";
import MobileTicketListPage from "./screens/Mobile/Sale/Sale.tsx";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* protected routes */}
        {/* unprotected routes */}
        <Route index element={<Welcome />} />
        <Route path="test" element={<Test />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="registration" element={<Registration />} />

        {/* SALES */}
        <Route path="sale" element={<SalePage />} />
        <Route path="sale/favorite/edit" element={<FavoritesEditPage />} />
        <Route path="sale/ticket/list" element={<MobileTicketListPage />} />
        <Route path="sale/ticket" element={<RootTicket />}>
          <Route index element={<TicketPage />} />
          <Route path="charge" element={<ChargePage />} />
        </Route>
        {/* END OF SALES */}

        {/* ITEM */}
        <Route path="item" element={<RootItem />}>
          <Route index element={<ItemPage />} />
          <Route path="index" element={<ItemPage />} />
          <Route path="category" element={<CategoryPage />} />
        </Route>
        <Route path="item/category/edit/:categoryId" element={<CategoryEditPage />} />
        <Route path="item/category/create" element={<CategoryCreatePage />} />
        <Route path="item/create" element={<ItemCreatePage />} />
        <Route path="item/edit/:itemId" element={<ItemEditPage />} />
        {/* END OF ITEM */}
        {/* SHIFT */}
        <Route path="shift" element={<ShiftPage />} />
        <Route path="shift/cash-management" element={<CashManagementPage />} />
        {/* END OF SHIFT */}
        {/* RECEIPT */}
        <Route path="receipt" element={<RootReceipt />}>
          <Route index element={<ReceiptPage />} />
          <Route path=":receiptId" element={<ReceiptPage />} />
        </Route>
        <Route path="receipt/:receiptId/refund" element={<RefundPage />} />
        {/* END OF RECEIPT */}
        {/* SETTINGS */}
        <Route path="settings" element={<RootSettings />}>
          <Route index element={<GeneralPage />} />
          <Route path="general" element={<GeneralPage />} />
          <Route path="printers" element={<PrintersPage />} />
          <Route path="customer-display" element={<CustomerDisplayPage />} />
          <Route path="taxes-display" element={<TaxesDisplayPage />} />
        </Route>
        {/* END OF SETTINGS */}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default Routes;
