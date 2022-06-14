import Image from "next/image";
import * as S from "./styles";
import gcbDesktopImg from '../../../public/gcb-desktop.svg'


export function Content() {
    return (
        <S.Container>
          <h1>
            Até onde conseguimos
            <br />
            chegar?
          </h1>

          <p>
            A <strong>curiosidade</strong> de descobrir
            <br />
            essa resposta é o que <strong>nos</strong>
            <br />
            <strong>move</strong> no dia-a-dia
          </p>

          <div>
            <Image src={gcbDesktopImg} alt='GCB Logo' />
          </div>
        </S.Container>
    )
}