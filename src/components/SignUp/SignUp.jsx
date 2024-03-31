import { useState } from "react";
import { registerWithEmailAndPass } from "../../firebase";

export default function SignUp({onClose}) {
  const [hide, setHide] = useState(true);
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await registerWithEmailAndPass(email,password);
    }catch(err){
      alert('Cannot Connect')
    }
    onClose();
  }
  return (
    <form className="grid gap-5 border border-red-500 bg-white w-2/4 absolute top-1/3 left-1/3">
      <label className="" htmlFor="Email">
        Email:{" "}
        <input className="border-b-2 border-black" type="text" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </label>
      <label htmlFor="Email">
        Password:{" "}
        <input
          className="border-b-2 border-black"
          type={hide ? "password" : "text"}
          id="PassWord"
          value={password} onChange={(e)=>setPassword(e.target.value)}
        />
      </label>
      <button
        className="border border-green-500 w-fit mx-auto px-5 py-2 hover:bg-green-500 hover:text-white rounded-md"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}
