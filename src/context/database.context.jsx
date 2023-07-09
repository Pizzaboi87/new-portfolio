import { createContext, useEffect, useState } from "react";
import { database } from "../utils/firebase";
import { ref, get } from "firebase/database";
import { Loading } from "../components";

export const DatabaseContext = createContext();

export const DatabaseContextProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database), "/");
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      } catch (error) {
        console.log("An error happened, during the data fetching: ", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <Loading />;

  return (
    <DatabaseContext.Provider value={data}>{children}</DatabaseContext.Provider>
  );
};
