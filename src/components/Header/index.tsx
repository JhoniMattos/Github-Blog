import background from "../../assets/background-logo.svg";

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={background} />
    </HeaderContainer>
  );
}
