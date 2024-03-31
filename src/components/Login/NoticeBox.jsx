import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import charvon from "../../assets/6BoJxkw0x-DfJ109.png";
import { isLoginContext } from "../../context";
import { database } from "../../firebase";
import SignUp from "../SignUp/SignUp";

export default function Notice() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { login, setLogin } = useContext(isLoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(database, email, password).then((data) => {
      history("/Home");
      setLogin(!login);
    });
  };

  const showRegister = () => {
    setShow(!show);
  };

  return (
    <div className="w-full px-5 h-[485px] bg-hero-background pt-8 relative">
      {show && <SignUp onClose={showRegister} />}
      <div className="w-[207px] min-h-[30px] bg-[#ABABAB] rounded-md p-3 text-xs text-white">
        <p>First time here?</p>
        <p>Sign On to Citibank Online</p>
        <form>
          <label htmlFor="userId">User Email</label>
          <input
            className="w-full text-black"
            type="text"
            id="userId"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="userPass">Password</label>
          <input
            className="w-full text-black"
            type="password"
            id="userPass"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border mt-2" type="button" onClick={handleSubmit}>
            SIGN In
          </button>
        </form>

        <p>We recommend you change your password regularly.</p>
        <label htmlFor="remember">
          <input type="checkbox" name="remember" id="remember" />
          Remember{' '}
          <button onClick={showRegister}> my</button> User Email
        </label>

        <ul className="text-xs text-white">
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Forgot your Password ?</a>
          </li>
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Forgot your User ID</a>
          </li>
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Frequently Asked Questions</a>
          </li>
          <li className="flex hover:underline">
            <img className="w-2 h-2 mt-1" src={charvon} alt="" />
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
