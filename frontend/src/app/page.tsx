import Aside from "@/components/aside/Aside";
import Main from "@/components/main/Main";

import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Aside />
      <Main/>
    </div>
  );
};

export default Home;
