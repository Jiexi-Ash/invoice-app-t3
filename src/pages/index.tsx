import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import data from "~/data.json";

import { api } from "~/utils/api";
import Navbar from "../components/Navbar";

import { PlusIcon } from "@heroicons/react/24/solid";
import Invoice from "../components/Invoice";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-secondaryBlack px-6">
        <div className="mx-auto flex w-full max-w-[672px]  items-center justify-between pt-9">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Invoices</h1>
            <div className="pt-1 text-xs text-lavender">
              <span className="block md:hidden">7 invoices</span>
              <div className="hidden md:block">
                There are <span>7</span> total invoices
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-2 rounded-3xl bg-primaryPurple p-[6px] px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <PlusIcon className="h-5 w-5 text-primaryPurple" />
            </div>
            <div className="text-white md:space-x-2">
              <span className="text-xs font-bold">New</span>
              <span className="hidden md:inline">Invoice</span>
            </div>
          </button>
        </div>

        <Invoice invoice={data} />
      </main>
    </>
  );
};

export default Home;
