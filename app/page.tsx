// Page d'accueil 
"use client";
import { signika } from "@/app/ui/fonts";

import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session, status } = useSession({
    required: true,
  });

  if(status === "loading") {
    return <></>
  }

  return (
    <main>
      <div className={`${signika.className} antialiased flex container mx-auto`}>
      
      </div>
    </main>
  );
};

export default HomePage;
