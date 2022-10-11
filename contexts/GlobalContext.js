import React, { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const peopleDataAPI = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Lindsay 2",
    title: "nextr",
    email: "nextr.walton@example.com",
    role: "reactrole",
  },
  {
    id: 3,
    name: "Lindsay 3",
    title: "vue",
    email: "vue.walton@example.com",
    role: "vuerole",
  },
];

const GlobalContextProvider = ({ children }) => {
  const [people, setPeople] = useState(peopleDataAPI);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [typeButton, setTypeButton] = useState("add");

  return (
    <GlobalContext.Provider
      value={{
        people,
        setPeople,
        name,
        setName,
        title,
        setTitle,
        email,
        setEmail,
        role,
        setRole,
        typeButton, setTypeButton
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobal = () => {
  const values = useContext(GlobalContext);
  return {
    ...values,
  };
};
