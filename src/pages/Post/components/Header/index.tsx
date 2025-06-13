import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { HeaderContainer, HeaderContent } from "./styles";

interface HeaderProps {
  title: string;
  user: string;
  createdAt: string;
  comments: number;
  issueUrl: string;
}

export function Header({
  title,
  user,
  createdAt,
  comments,
  issueUrl,
}: HeaderProps) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <NavLink to="/">
            <button>
              <FontAwesomeIcon icon={faChevronLeft} />
              voltar
            </button>
          </NavLink>
          <a href={issueUrl} target="_blank" rel="noopener noreferrer">
            ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>{title}</h1>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            {timeAgo}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {comments} {comments === 1 ? "comentário" : "comentários"}
          </span>
        </footer>
      </HeaderContent>
    </HeaderContainer>
  );
}
