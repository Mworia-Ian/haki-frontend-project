import React from "react";
import ClientHome from "./ClientHome";
import LawyerHome from "../components/LawyerHome";

function Home() {
  const user = {role: "client" };
  return (
    <div>
      <div>
          {user.role === "lawyer" ? (
            <LawyerHome />
          ) : (
            <ClientHome />
          )}
      </div>
    </div>
  );
}

export default Home;
