import { ProfileContainer } from "./styles";

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
  return (
    <ProfileContainer>
      <h1>{title}</h1>
      <p>
        Por <strong>{user}</strong> em{" "}
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <p>Comentários: {comments}</p>
      <a href={issueUrl} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </a>
    </ProfileContainer>
  );
}
