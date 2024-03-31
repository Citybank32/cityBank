import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Page from "./Login/Page";
import Payment from "./Payment/Payment";
import PinBox from "./Payment/PinBox";
import SendRecipient from "./Payment/SendRecipient";
import SignUp from "./SignUp/SignUp";
import Protected from "../utiles/Protected";
import Success from "./Payment/Success";


export default function Layout() {
  
    
    
  return (
    <>
      <section className="mx-auto max-w-[982px] ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Home" element={<Protected><HomePage /></Protected>} />
            <Route path="/Pay" element={<Protected><Payment /></Protected>} />
            <Route path="/Pay/SendRecipient" element={<Protected><SendRecipient /></Protected>} />
            <Route path="/Pay/SendRecipient/PinBox" element={<Protected><PinBox /></Protected>} />
            <Route path="/Pay/SendRecipient/PinBox/Success" element={<Protected><Success /></Protected>} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}
