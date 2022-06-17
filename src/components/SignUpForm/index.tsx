import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { Form, useForm } from "../../hooks/useForm";
import useMedia from "../../hooks/useMedia";
import { AppColors } from "../../styles/global";
import { tokenGenerator } from "../../utils/authenticator";
import { IdGenerator } from "../../utils/id-generator";
import { passwordValidator } from "../../utils/password-validator";
import { Button } from "../Button";
import Input from "../Input";
import Logo from "../Logo";
import * as S from "./styles";

export function SignUpForm() {
  const [errors, setErrors] = useState<string[]>([]);
  const { form, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
    terms: false,
  } as Form);
  const mobile = useMedia("(max-width: 900px)");

  const router = useRouter();

  const signUp = (e: FormEvent) => {
    e.preventDefault();

    const user = {
      id: IdGenerator(),
      name: form.name,
      email: form.email,
      password: form.password,
    };

    const isValid = passwordValidator(user.password);

    if (!isValid.result) {
      setErrors(isValid.errors);
      return;
    }

    const token = tokenGenerator(user.id);
    localStorage.setItem("user", JSON.stringify(user));

    router.push("/");
  };

  return (
    <S.Container>
      <form onSubmit={signUp}>
        {mobile && (
          <Logo src="/gcb-mobile.svg" alt="GCB Logo" width={420} height={120} />
        )}
        <Input
          label="Seu Nome"
          htmlFor="name"
          value={form.name!}
          onChange={handleInputChange}
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
          required
        />
        <Input
          label="Email"
          htmlFor="email"
          value={form.email}
          onChange={handleInputChange}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <Input
          label="Senha"
          htmlFor="password"
          value={form.password}
          onChange={handleInputChange}
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          required
        />
        {errors && (
          <S.Errors>
            {errors.map((error, index) => (
              <span key={index}>{error}</span>
            ))}
          </S.Errors>
        )}
        <div>
          <input
            checked={form.terms}
            onChange={handleInputChange}
            type="checkbox"
            id="terms"
            name="terms"
            required
          />
          <label htmlFor="terms">Eu li e aceito os Termos e Condições</label>
        </div>
        <Button
          type="submit"
          bgColor={AppColors.brown}
          color={AppColors.caramelo}
        >
          Entrar
        </Button>
      </form>
    </S.Container>
  );
}
