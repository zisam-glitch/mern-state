import React from "react";
import Header from "../components/Header";
import AgentValueation from "../components/AgentValueation"

export default function About() {
  return (
    <>
      <Header />
      <div className=" m-8 rounded-2xl bg-center bg-cover bg-no-repeat	bg-[url(https://images.ctfassets.net/02vwvgr6spsr/3jIjVuOl8EzGMnZ08S1kJh/51b3283345bb95b14ae0bdae24ed2d29/Stocksy_txpd25ede67ULp300_Large_2864818.jpg?w=1440&fm=webp&q=65)] ">
        <div className="rounded-2xl bg-overley  flex flex-col gap-4 max-w-full mx-auto">
         <div className="flex p-6">
          <div className="w-1/3">
            <div className="bg-white rounded-md" >
              <AgentValueation />
            </div>
          </div>
         </div>
        </div>
      </div>
      
    </>
  );
}
