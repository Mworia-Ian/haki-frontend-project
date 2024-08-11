import React from "react";
import ClientHome from "./ClientHome";

function Home() {
  const user = { name: "John Doe", role: "client" };

  return (
    <div>
      <div>
          {user.role === "lawyer" ? (
            <p>You can manage your clients and provide legal services.</p>
          ) : (
            <ClientHome />
          )}
      </div>
    </div>
  );
}

export default Home;
