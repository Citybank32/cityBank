import { onValue, ref, update } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { customerData } from "../context";
import { database, db } from "../firebase";

export default function CustomerDataProvider({ children }) {
  const [user, loading, error] = useAuthState(database);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const dataDB = snapshot.val();
      if (dataDB) {
        const filterdData = Object.values(dataDB).filter(
          (single) => single.email === user?.email
        );
        setData([...filterdData]);
      }
    });
  }, []);
  


  
  
  return (
    <>
      <customerData.Provider value={[data]}>
        {children}
        </customerData.Provider>
    </>
  );
}
