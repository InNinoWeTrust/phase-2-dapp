"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/brownwatersproductions Complete.svg";
import { client } from "./client";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: Brown Waters DAO App",
              url: "brownwaters.eth.limo",
            }}
          />
        </div>

        <ThirdwebResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        Welcome to 
        <span className="text-zinc-300 inline-block mx-1"> Brown Waters </span>
        <span className="inline-block -skew-x-6 text-blue-500"> DAO </span>
      </h1>

      <p className="text-zinc-300 text-base">
        Home of{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          Brownie Points
        </code>{" "}
        $BWP Ecosystem.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="Join the community and get even more benefits plus networking"
        href="https://discord.gg/qETmz5MpQ3"
        description="Brown Water Dao Discord Server"
      />

      <ArticleCard
        title="Youtube Channel"
        href="https://www.youtube.com/@brownwaters"
        description="Catch up on Brown Waters Content"
      />

      <ArticleCard
        title="Linktree"
        href="https://linktr.ee/brownwatersdao"
        description="Official linktree"
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
