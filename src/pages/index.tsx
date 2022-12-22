import * as React from 'react';
import { type NextPage } from "next";
import Head from "next/head";
import { Card } from "./components/Card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bars } from "./components/Bars";
import { Sidebar } from "./components/Sidebar";

export type userGroth = {
  id: number;
  year: string;
  userGain: number;
  userLoss: number;
}

interface officeData {
  temperature: string;
  drinksAvailable: string;
  totalUsers: string;
  needWater?: string;
  weather: {
    time: string;
    temperature: string;
    weathercode: string;
    windspeed: string;
    winddirection: string;
  },
  userGrowth: userGroth[]
}

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);

  const getData = async () => {
    const res = await fetch('http://localhost:3000/api/customApi');
    return res.json();
  };

  const { data, isFetching, isError, error } = useQuery<officeData[]>(["officeData"], getData)

  if (isFetching)
    return <>Loading...</>

  if (isError) {
    return <span>Error:</span>
  }

  return (
    <>
      <Head>
        <title>DevTask</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <></>
      <main className="flex min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <section className="flex gap-6">
          <Sidebar />
          <div className="m-3 min-h-screen text-xl text-gray-900 font-semibold">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mb-64">

              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                GoSquared <span className="text-[hsl(280,100%,70%)]">DevTask</span>
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 md:gap-8">
                {data ? <Card title="Total Users" message={data[0]?.totalUsers ?? ''} /> : <></>}
                {data ? <Card title="Temperature" message={data[0]?.temperature ?? ''} /> : <></>}
                {data ? <Card title="Water the plant" message={data[0]?.needWater ?? ''} /> : <></>}
                {data ? <Card title="Drinks" message={data[0]?.drinksAvailable ?? ''} /> : <></>}
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
