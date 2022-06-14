import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Spinner } from "phosphor-react";
import "react-toastify/dist/ReactToastify.css";
import { setTimeout } from "timers";
import gcbMobileImg from "../../../public/gcb-mobile.svg";
import useMedia from "../../hooks/useMedia";
import * as S from "./styles";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const mobile = useMedia("(max-width: 900px)");
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const login = (e: FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!loading) {
      if (!user.email || !user.password) {
        return toast.error("Nenhum usuário cadastrado");
      }
  
      if (user.email !== emailRef.current?.value) {
        return toast.error("Email incorreto");
      }
  
      if (loading && user.password !== passwordRef.current?.value) {
        return toast.error("Senha incorreta");
      }
  
      toast.success("Login realizado com sucesso");
      localStorage.setItem("token", "logado");
      router.push("/welcome");
      }
    }
  }

  return (
    <S.Container>
      <form onSubmit={login}>
        {mobile && (
          <div>
            <Image src={gcbMobileImg} alt="GCB Logo" />
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
        <button type="submit">
          {loading ? <Spinner size={32} /> : "Entrar"}
        </button>
      </form>
    </S.Container>
  );
}
