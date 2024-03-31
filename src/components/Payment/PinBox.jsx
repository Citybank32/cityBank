import { useContext, useState } from "react";
import PinInput from "react-pin-input";
import sendLogo from "../../assets/istockphoto-1344841941-2048x2048_1_-removebg-preview.png";
import { customerData } from "../../context";

import Nav from "../HomePage/Nav";
import Success from "./Success";
import { useNavigate } from "react-router-dom";
export default function PinBox() {
 const history = useNavigate()
  const [pin, setPin] = useState("");
  const { ...data } = useContext(customerData);

  const process = data[0][0];

  const handleSubmit = () => {
    if (process.pin === pin) {
      history('/Pay/SendRecipient/PinBox/Success');
    } else {
      alert("Enter valid PIN");
    }
   
  };

  return (
    <section className="h-[400px] text-center bg-white relative">
      <Nav />
      <p className="mt-9">
        Confirm your GLO Lotto money transfer enter your City Bank secret pin
        number
      </p>
      <div className="flex justify-center mt-16">
        <img src={sendLogo} width={30} />{" "}
        <p className="mt-1"> Enter Your PIN </p>
      </div>
      <div className="flex justify-center mt-1">
        <span></span>
        <PinInput
          length={6}
          initialValue=""
          secret
          secretDelay={100}
          onChange={(value, index) => {
            setPin(value);
          }}
          type="numeric"
          inputMode="number"
          style={{ padding: "10px", borderRadius: "5px" }}
          inputStyle={{ borderColor: "" }}
          inputFocusStyle={{ borderColor: "skyblue" }}
          onComplete={(value, index) => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
      </div>

      <button
        className=" mt-3 border px-3 py-2 border-sky-500 rounded-md hover:bg-sky-500 hover:text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
      
    </section>
  );
}
