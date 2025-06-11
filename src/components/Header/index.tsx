import background from "../../assets/background-logo.svg";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div>
      <img src={background} />
      <img src={logo} />
    </div>
  );
}
