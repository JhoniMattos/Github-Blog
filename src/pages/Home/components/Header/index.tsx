import { ProfileContainer, ProfileContent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

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
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <p>Full Stack Developer | HTML, CSS, JavaScript, React</p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            jhonimattos
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  );
}
