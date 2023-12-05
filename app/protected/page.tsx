"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (status === "unauthenticated") {
        router.push("/connection");
      } else if (status === "authenticated") {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [status]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      This page is protected for special people. Like:
      {JSON.stringify(data?.user, null, 2)}
    </div>
  );
};

export default Protected;
