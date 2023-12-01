'use client'

import { signIn } from "next-auth/react";
import { NextPage } from "next";
import { FormEventHandler, useState } from "react";

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

    e.preventDefault();

    const res = await signIn("credentials", {
      username: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res && res.error) {
      alert('Identifiant ou mot de passe incorrect')
    } else {
      alert('Utilisateur connecté')
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;