import { ref, set } from "firebase/database";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { uid } from "uid";
import { database, db } from "../firebase";
export default function SetData({ onClose }) {
  const [primaryData, setPrimaryData] = useState({});
  const [pin,setPin] = useState('');
  const [amount,setAmount]=useState('')
  const [user, loading, error] = useAuthState(database);

  const handleData = (e) => {
    setPrimaryData({
      ...primaryData,
      [e.target.name]: e.target.value,
    });
  };

  const createData = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      primaryData,
      uuid,
      email: user.email,
      pin,
      amount
    });
    localStorage.removeItem('taka');
    onClose();
  };
  return (
    <section className="fixed top-10 left-1/3 bg-sky-500 p-10 space-y-6">
      <p>
        Amount: <input type="numner" name="amount" onChange={(e)=>setAmount(e.target.value)} />
      </p>
      <p>
        Time : <input type="text" name="time" onChange={handleData} />
      </p>
      <p>
        transiction Amount :{" "}
        <input type="text" name="tAmount" onChange={handleData} />
      </p>
      <p>
        From/To : <input type="text" name="fromTo" onChange={handleData} />
      </p>
      <p>
        Status : <input type="text" name="status" onChange={handleData} />
      </p>
      <p>Pin : <input type="number" onChange={(e)=>setPin(e.target.value)}/></p>
      <button className="border px-4 text-red-600" onClick={onClose}>
        x
      </button>
      <button className="border ml-3 p-3 text-white" onClick={createData}>
        submit
      </button>
    </section>
  );
}
