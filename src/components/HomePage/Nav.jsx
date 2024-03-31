import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logoBlueBackground.png";
import { isLoginContext } from "../../context";
import { database } from "../../firebase";
export default function Nav() {
  const history = useNavigate();
  const [signIn, setSignIn] = useState(false);
  const { login, setLogin } = useContext(isLoginContext);
  const signoutFunction = () => {
    signOut(database).then((val) => {
      history("/");
      setLogin(!login);
    });
  };
  return (
    <nav className="w-full flex justify-between px-5 py-2 shadow-md relative bg-blue-500 text-white">
      <div className="flex">
        <h1 className="flex mr-6">
          {" "}
          <img src={logo} /> <p className="mt-1 text-xl">bank</p>
        </h1>
        <div className="flex gap-5 text-sm mt-2">
          <NavLink to="/Home">DASHBOARD</NavLink>
          <NavLink to="/Pay">PAY</NavLink>
          <NavLink to="/Pay">WITHDRAW</NavLink>
        </div>
      </div>

      <button className="" onClick={() => setSignIn(!signIn)}>
        <CgProfile />
      </button>

      {signIn && (
        <button
          className="absolute bottom-[-30px] right-3 bg-white text-black p-2 "
          onClick={signoutFunction}
        >
          SignOut
        </button>
      )}
    </nav>
  );
}
