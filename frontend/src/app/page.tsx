import Aside from "@/components/Aside/Aside";
import Main from "@/components/Main/Main";

import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <Aside />
      <Main/>
    </div>
  );
};

export default Home;
