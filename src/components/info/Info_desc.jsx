import React from "react";
import Image from "next/image";
import Link from "next/link";

const Info_desc = () => {
  return (
    <div className=" mt-10 flex flex-col items-center mb-28">
      <div className="flex justify-center items-center ">
        <div className="w-[475px] pr-16">
          <h1 className="text-3xl font-[800] mb-6">
            Vous installer dans le canton de votre choix
          </h1>
          <h4 className="text-lg mb-6">
            Domiciliation Solutions se focalise sur les PME et les start-ups.
            Nous opérons dans tous les cantons et soutenons les porteurs de
            projets en tant que partenaire domiciliataire.
          </h4>
          <Link
            href="/"
            className="text-primary border-b-2 border-b-primary font-bold"
          >
            voir plus..
          </Link>
        </div>
        <div className="flex-1">
          <Image src="/docs_1.png" alt="desc-1" width={475} height={475} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-28 ">
        <div className="flex-1">
          <Image src="/docs_2.png" alt="desc-2" width={475} height={475} />
        </div>
        <div className="w-[475px] pl-16">
          <h1 className="text-3xl font-[800] mb-6">
            Comprendre facilement la domiciliation
          </h1>
          <h4 className="text-lg mb-6">
            Optez pour la domiciliation et implantez votre entreprise où vous le
            souhaitez. Un emplacement stratégique vous offre des avantages
            fiscaux et une visibilité commerciale significative dans les cantons
            choisis.
          </h4>
          <Link
            href="/"
            className="text-primary border-b-2 border-b-primary font-bold"
          >
            voir plus..
          </Link>
        </div>
      </div>
      <div className=" flex flex-col  w-[950px] mt-24">
        <h2 className="text-[27px] pr-10 leading-7 text-[#23242A] font-[800] ">
          Pas prêt à quitter le confort de la maison ? Profitez d&apos;une
          impressionnante adresse de bureau virtuel en Suisse, sans avoir à vous
          y rendre.
        </h2>
        <h3 className="text-[16px] tracking-wide pt-3 leading-[18px] mb-6 font-[400]">
          Découvrez les avantages d&apos;un Bureau Virtuel avec transfert de
          courrier en Suisse ! Impressionnez vos clients et prospects en
          utilisant une adresse en Suisse, le tout sans quitter le confort de
          votre maison. Recevez du courrier, des appels téléphoniques et bien
          plus encore, avec un personnel dédié pour gérer tous les aspects, de
          la réception des appels au transfert du courrier.
        </h3>
      </div>
      <div className="flex w-[950px] justify-center items-center gap-20">
        <div className="flex-1">
          <div className="text-primary text-[16px] tracking-[0.03em] font-extrabold">
            Bureau virtuel en Suisse pour renforcer votre impact national et
            international
          </div>
          <div className="mt-2 leading-[19px] text-[14px]">
            Un bureau virtuel en Suisse est le choix idéal pour les startups
            souhaitant accroître leur impact à l&apos;échelle nationale et
            internationale, les entreprises qui cherchent à conquérir un marché
            inexploité ou celles ayant de nombreux clients en Suisse. Nos
            clients utilisant nos adresses postales virtuelles en Suisse
            proviennent de divers secteurs tels que la technologie, le droit et
            le recrutement de cadres, parmi d&apos;autres.
            <br />
            <br />
            Quelle que soit votre raison d&apos;intérêt pour un bureau virtuel
            en Suisse, vous bénéficierez d&apos;un environnement de travail
            professionnel et complet, flexible selon votre emploi du temps.
          </div>
        </div>
        <div className="flex-1">
          <div className="text-primary text-[16px] tracking-[0.03em] pr-36 font-extrabold">
            Avantages des bureaux virtuels en Suisse
          </div>
          <div className="mt-2 leading-[19px] text-[14px]">
            Découvrez nos forfaits de bureau virtuel en Suisse pour une présence
            commerciale rapide et abordable dans n&apos;importe quel canton.
            Bénéficiez d&apos;une prestigieuse adresse virtuelle avec des
            options telles qu&apos;un numéro de téléphone local, un numéro de
            fax, la gestion du courrier, la numérisation et le transfert du
            courrier, ainsi que la réception en direct et bien plus encore.
            Établissez votre présence au bureau virtuel en Suisse du jour au
            lendemain, avec accès aux salles de réunion, aux salles de
            conférence, aux bureaux de jour et à l&apos;espace de réception.
            Profitez d&apos;un service personnalisé de notre équipe de réception
            pour faire prospérer votre entreprise où que vous soyez en Suisse.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_desc;
