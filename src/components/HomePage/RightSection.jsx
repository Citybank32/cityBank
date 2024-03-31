import { useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { customerData } from "../../context";
import SingleStatus from "./singleStatus";

export default function RightSection() {
  const history = useNavigate();
  const { ...data } = useContext(customerData);

  const process = data[0];
  const taka = localStorage.getItem('taka')

console.log(process[0].amount,taka);


  const Status = [
    {
      name: "Bank account",
      desc: "50+ currencies and 150+ areas supported",
      img: <RiBankFill />,
    },
    {
      name: "TAX Authority or agent",
      desc: "10+ countries tax service supported",
      img: <PiNotepadBold />,
    },
    {
      name: "Other Account",
      desc: "0% fee and real-time",
      img: <MdAccountBox />,
    },
  ];

  return (
    <section className="w-2/3 grid gap-3">
      <div className=" bg-white mt-6 py-9 px-7">
        <div className=" flex justify-between rounded-md mb-8">
          <h1 className="font-bold">Total Balance </h1>
          <div className="text-sm text-sky-500 font-semibold space-x-2">
            <button
              className="border border-sky-500 py-1 px-3 rounded-full"
              onClick={() => {
                history("/Pay");
              }}
            >
              Send Payments
            </button>
          </div>
        </div>
        <h1 class Name="mx-auto text-3xl">
          {taka} $
        </h1>
      </div>

      <div className="bg-white p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl">Get your global receiving accounts</h1>
            <p className="text-xs">
              Receive funds from e-commerce platforms like Amazon, Wish, eBay
              and etc.
            </p>
          </div>
          <p>
            <CiMenuKebab />{" "}
          </p>
        </div>
        <button className="border border-sky-500 py-[5px] px-3 rounded-full text-sky-500 text-sm font-semibold mt-4">
          Get receiving accounts
        </button>
      </div>

      <div className="bg-white p-5 mt-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl">Send payment</h1>
            <p className="text-xs py-2">to</p>
          </div>
          <p>
            <CiMenuKebab />
          </p>
        </div>
        <div className="grid grid-cols-3  gap-5">
          {Status.map((single, id) => (
            <SingleStatus key={id} {...single} />
          ))}
        </div>
      </div>

      <div className="bg-white p-5 mt-5">
        <div className="flex justify-between">
          <h1 className="font-bold ">Balance history</h1>
          <p className="text-xs text-sky-500">More</p>
        </div>
        <table className="table-fixed w-full mt-3 text-left">
          <thead>
            <tr className="text-sm border-b-[1px]">
              <th>Time</th>
              <th>Amount</th>
              <th>From/To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {process.map((single) => {
              return (
                <tr key={single.uuid}>
                  <td>{single.primaryData.time}</td>
                  <td>{single.primaryData.tAmount}</td>
                  <td>{single.primaryData.fromTo}</td>
                  <td>{single.primaryData.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
