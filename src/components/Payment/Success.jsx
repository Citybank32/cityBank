import { useNavigate } from "react-router-dom";

export default function Success() {
  const history = useNavigate();

  const handleClose = () => {
    history("/Pay");
    localStorage.removeItem("allPaymentData");
  };

  const { payment, bankAcNumber, acHolderName, bank, contact, country } =
    JSON.parse(localStorage.getItem("allPaymentData"));

  return (
    <section className="w-full bg-gray-100 p-7  text-black border border-1 border-red-100">
      <h1 className="bg-red-500 text-white text-center text-xl ">Transfer Money</h1>
      <div className="bg-white text-black p-2 flex">
        <div className="w-1/2">
        <h2 className="font-semibold">Thank You,</h2>
        <p className="text-sm">Here's your recipt</p>
        </div>
        <h1 className="text-xl font-bold">City Bank</h1>
        
      </div>
      <div className="bg-gray-300 text-black p-3">
        <h1 className="text-green-500 font-bold">Successful</h1>
        <p className="text-sm">Ref 626607192</p>
      </div>
      <p className="font-bold text-xl mt-7">To</p>
      <div className="flex text-gray-500 text-sm border-b pb-3">
        <div className="w-1/2 space-y-3">
          <p>Bank Ac Number : </p><span className="text-black font-bold">{payment}</span>
          <p>Ac Holder Name : </p><span className="text-black font-bold">{acHolderName}</span>
          <p>Bank Name :</p><span className="text-black font-bold">{bank}</span>
        </div>
        <div className="space-y-3">
          

          <p>Contact Number :</p> <span className="text-black font-bold">{contact}</span>
          <p>Bank Country Name : </p><span className="text-black font-bold">{country}</span>
        </div>
      </div>
      <h1 className="mt-4 text-xl font-bold">When</h1>
      <div className="flex mb-3 border-b pb-3">
        <div className="w-1/2">
        <p className="text-sm text-gray-500">Date</p>
      <p>Today</p>
        </div>
        <div>
            <p className="text-sm text-gray-500">Repeat</p>
            <p>No</p>
        </div>

      </div>
      

        <p className="font-bold border-b pb-2">Amount : {payment}</p>
        <p className="font-bold  pt-2">Total : {payment}</p>
      
      <button className="text-white  p-1 bg-red-500 float-right" onClick={handleClose}>
        Close
      </button>
    </section>
  );
}
