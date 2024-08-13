import React from "react";
import ClientHome from "./ClientHome";
import LawyerHome from "../components/LawyerHome";
import { useUser } from "../UserContext";

function Home() {
  const {user} = useUser();
  return (
    <div>
      <div>
      {user.role === "lawyer" ? <LawyerHome /> : <ClientHome />}
      </div>
    </div>
  );
}

export default Home;
