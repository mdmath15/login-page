import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Content } from "../components/Content";
import { LoginForm } from "../components/LoginForm";
import * as S from "../styles/styles";
import { tokenVerifier } from "../utils/authenticator";


function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    const token = localStorage.getItem("token");

    if (user && token) {
      const isValid = tokenVerifier(token) as {id: string};

      if (isValid.id === user.id) {
        router.push("/welcome");
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>GCB - Login</title>
        <meta name="description" content="GCB Investimentos - Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <Content />
        <LoginForm />
      </S.Container>
    </>
  );
}

export default Home;
