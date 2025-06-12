import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </button>
          <a
            href="https://github.com/JhoniMattos"
            target="_blank"
            rel="noopener noreferrer"
          >
            ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            Jhoni Mattos
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </footer>
      </HeaderContent>
    </HeaderContainer>
  );
}
