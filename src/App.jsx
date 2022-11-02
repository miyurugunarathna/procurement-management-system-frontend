import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PurchaseOrder from "./pages/PurchaseOrder";
import PlacedOrderRequest from "./pages/PlacedOrderRequest";
import Response from "./pages/Response";
import PurchasedOrder from "./pages/PurchasedOrder";
import UpdateStatus from "./pages/UpdateStatus";
import DeliveryAdvice from "./pages/DeliveryAdvice";
import Payment from "./pages/Payment";
import Request from "./pages/Request";
import { Register, Login } from "./pages";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/order" element={<PurchaseOrder />} />
        <Route path="/orderRequest" element={<PlacedOrderRequest />} />
        <Route path="/request" element={<Request />} />
        <Route path="/response" element={<Response />} />
        <Route path="/purchasedOrder" element={<PurchasedOrder />} />
        <Route path="/deliveryStatus" element={<UpdateStatus />} />
        <Route path="/deliveryAdvice" element={<DeliveryAdvice />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
