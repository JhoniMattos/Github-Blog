import { ArrowSquareOut, GithubLogo, Users } from "phosphor-react";
import { ProfileContainer, ProfileContent } from "./styles";

export function Header() {
  return (
    <ProfileContainer>
      <img src="https://github.com/JhoniMattos.png" />
      <ProfileContent>
        <div>
          <h1>Jhoni Mattos</h1>
          <a
            href="https://github.com/JhoniMattos"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <ArrowSquareOut size={18} />
          </a>
        </div>

        <p>Full Stack Developer | HTML, CSS, JavaScript, React</p>

        <footer>
          <span>
            <GithubLogo size={18} />
            jhonimattos
          </span>
          <span>
            <Users size={18} />
            32 seguidores
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  );
}
