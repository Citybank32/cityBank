import { ref } from "firebase/database";
import { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { customerData } from "../../context";
import { db } from "../../firebase";
import Nav from "../HomePage/Nav";
export default function SendRecipient() {
  const { ...data } = useContext(customerData);
  
  const process = data[0]; 
  
 
 
  const [uid,setUid] = useState(process[0].uuid);
  const history = useNavigate();
  const [payment, setPayment] = useState("");
  const [bankAcNumber, setBankAcNumber] = useState("");
  const [acHolderName, setAcHolderName] = useState("");
  const [bank, setBank] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  
  const amount =process[0].amount - localStorage.getItem('taka');
  
  
  const handleNext = (e) => {
    if (payment && bankAcNumber && acHolderName && bank && contact && country) {
      let items = {
        payment,
        bankAcNumber,
        acHolderName,
        bank,
        contact,
        country,
      };
       
      if (amount >= payment ) {
        const taka = amount - payment ;
        
        localStorage.setItem("allPaymentData", JSON.stringify(items));
        localStorage.setItem('taka',taka)
        history('/Pay/SendRecipient/PinBox');
      }else{
        alert('sufficent balance');
        console.log();
        
      }

    } else  {
      alert("please fill all field");
    }
  };

  const addData = (e, callback) => {
    callback(e.target.value);
  };

  
  
  
  return (
    <>
      <Nav />
      <p className="text-center my-6 text-xl font-semibold">
        Send to a recipient
      </p>
      <section className="flex gap-3">
        <div className="bg-white w-1/4 p-4 space-y-3 h-fit">
          <h1 className="font-semibold pb-2">YOU ARE SENDING TO </h1>
          <hr />
          <p className="text-xs">Recipient's name</p>
          <p className="text-xs">CityBank Account</p>
          <p></p>
          <p className="text-gray-500 text-xs">
            Please make sure email address is correct.
          </p>
        </div>
        <form className="bg-white w-3/4 p-6">
          <h1 className="font-semibold border-l-4 pl-2 border-l-sky-500 mb-5">
            PAYMENT DETAIL
          </h1>
          <p className="text-gray-500 text-center">Amount you want to pay</p>
          <input
            className="border-b w-full p-1 my-3"
            name="amount"
            type="number"
            required
            onChange={(e) => addData(e, setPayment)}
          />

          <h1 className="font-semibold border-l-4 pl-2 border-l-sky-500 mb-3">
            Bank Ac Number
          </h1>
          <input
            className="border-b w-full p-1 my-3"
            name="bankNumber"
            type="text"
            required
            onChange={(e) => addData(e, setBankAcNumber)}
          />

          <h1 className="font-semibold border-l-4 pl-2 border-l-sky-500 mb-3">
            Ac Holder name
          </h1>
          <input
            className="border-b w-full p-1 my-3"
            name="holderName"
            type="text"
            required
            onChange={(e) => addData(e, setAcHolderName)}
          />

          <h1 className="font-semibold border-l-4 pl-2 border-l-sky-500 mb-3">
            Bank name{" "}
          </h1>
          <input
            className="border-b w-full p-1 my-3"
            name="bankName"
            type="text"
            required
            onChange={(e) => addData(e, setBank)}
          />

          <h1 className="font-semibold border-l-4 pl-2 border-l-sky-500 mb-3">
            Contact Number
          </h1>
          <input
            className="border-b w-full p-1 my-3"
            name="contact"
            type="number"
            required
            onChange={(e) => addData(e, setContact)}
          />

          <h1 className="font-semibold border-l-4 pl-2 border-l-sky-500 mb-3">
            Bank Country Name
          </h1>
          <input
            className="border-b w-full p-1 my-3"
            name="bankCountry"
            type="text"
            required
            onChange={(e) => addData(e, setCountry)}
          />

          <button
            className=" float-right flex  w-[100px] justify-between border p-2"
            onClick={handleNext}
            type="button"
          >
            Next{" "}
            <span className="text-sm pt-1">
              {" "}
              <FaArrowRight />
            </span>
          </button>
        </form>
      </section>
    </>
  );
}
