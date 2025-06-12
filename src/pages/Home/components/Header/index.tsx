import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { fetchGitHubUser } from "../../../../services/fetchGitHubUser.tsx";
import { ProfileContainer, ProfileContent } from "./styles";

const GITHUB_USERNAME = "JhoniMattos";

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  company?: string | null;
  followers: number;
}

export function Header() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    fetchGitHubUser(GITHUB_USERNAME, token)
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [token]);

  if (!user) return <p>Carregando perfil...</p>;

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt={user.name} />
      <ProfileContent>
        <div>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <p>{user.bio}</p>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>

          {user.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>
          )}

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} {user.followers === 1 ? "seguidor" : "seguidores"}
          </span>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  );
}
