import { UniversityContextProvider } from "./context/UniversityContext";
import IssueSubmitSuccess from "./pages/success/IssueSubmitSuccess";
import OrderSuccess from "./pages/success/OrderSuccess";
import Register from "./pages/register/Register";
import SignIn from "./pages/signin/SignIn";
import Error from "./pages/error/Error";
import OrderFood from "./pages/orderFood/OrderFood";
import ItemFound from "./pages/item/found/ItemFound";
import ItemLost from "./pages/item/lost/ItemLost";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "./pages/report/Report";
import SharedContent from "./helper/SharedContent";
import ProtectedRoute from "./helper/ProtectedRoute";

const App = () => {
  return (
    <UniversityContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedContent />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orderSuccess"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reportSuccess"
              element={
                <ProtectedRoute>
                  <IssueSubmitSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <OrderFood />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report"
              element={
                <ProtectedRoute>
                  <Report />
                </ProtectedRoute>
              }
            />
            <Route
              path="/itemFound"
              element={
                <ProtectedRoute>
                  <ItemFound />
                </ProtectedRoute>
              }
            />
            <Route
              path="/itemLost"
              element={
                <ProtectedRoute>
                  <ItemLost />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <Error />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UniversityContextProvider>
  );
};

export default App;
