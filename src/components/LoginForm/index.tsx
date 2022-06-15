import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMedia from "../../hooks/useMedia";
import { tokenGenerator, tokenVerifier } from "../../utils/authenticator";
import { Button } from "../Button";
import * as S from "./styles";

export function LoginForm() {
  const [loading, setLoading] = useState<null | boolean>();
  const mobile = useMedia("(max-width: 900px)");
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const login = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => setLoading(false), 2000);

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user.email || !user.password) {
      setTimeout(() => toast.error("Nenhum usuário cadastrado"), 2000);
    }

    if (user.email !== emailRef.current?.value) {
      setTimeout(() => toast.error("Email incorreto"), 2000);
    }

    if (user.password !== passwordRef.current?.value) {
      setTimeout(() => toast.error("Senha incorreta"), 2000);
    }

    if (
      user.email === emailRef.current?.value &&
      user.password === passwordRef.current?.value
    ) {
      tokenGenerator(user.id)
      setTimeout(() => toast.success("Login realizado com sucesso"), 1000);
      setTimeout(() => router.push("/welcome"), 2000);
    }
  };

  return (
    <S.Container>
      <form onSubmit={login}>
        {mobile && (
          <div>
            <Image
              src="/gcb-mobile.svg"
              alt="GCB Logo"
              width={420}
              height={120}
            />
          </div>
        )}
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password">Senha</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
        <span>
          Não tem cadastro?{" "}
          <Link href="/signup">
            <a>Cadastre-se agora!</a>
          </Link>
        </span>
        <Button type="submit">
          {loading ? <S.Loading size={32} /> : "Entrar"}
        </Button>
      </form>
    </S.Container>
  );
}
