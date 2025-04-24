import Image from "next/image";
import Link from "next/link";
import React from "react";
import foot from "../../public/assets/logo/footer.png";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-24 px-6">
        <figure className="pb-6 md:pb-8">
          <Image
            src={foot}
            alt="footer logo"
            className="max-w-full p-1 md:max-w-1/3 h-auto"
          />
        </figure>
        <article className="pb-12">
          <p className="text-sm font-thin leading-tight">
            Codejet Sp. z o.o. realizuje projekt z dofinansowania ze środków
            Europejskiego Funduszu Rozwoju Regionalnego w ramach FEPW.01.01
            Platformy startowe dla nowych pomysłów Komponent IIa: Wsparcie
            rozwoju działalności gospodarczej startupu na realizacje projektu.
            Tytuł: „Opracowanie i przygotowanie do komercjalizacji platformy o
            nazwie Codejetapp.com pozwalającej na (1) tworzenie stron
            internetowych oraz wdrażanie aplikacji mobilnych/przeglądarkowych
            dla osób bez wiedzy informatycznej, oraz (2) skracającej czas pracy
            programistów nawet 5-krotnie” nr projektu FEPW.01.01-IP.01-0175/23
          </p>
        </article>
        <div className="flex flex-row justify-start items-center gap-4 md:gap-8 mb-16">
          <Link className="font-bold text-md" href="/">
            Home
          </Link>
          <Link className="font-bold text-md" href="/">
            Pricing
          </Link>
          <Link className="font-bold text-md" href="/">
            Community
          </Link>
        </div>
        <hr className="space-y-8 text-gray-600" />
        <article className="text-left md:text-right my-8">
          <p className="text-gray-400">Codejet.ai © 2024</p>
        </article>
      </div>
    </div>
  );
}
