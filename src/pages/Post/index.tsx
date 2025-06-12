import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { PostContainer, PostContent } from "./styles";

interface GitHubIssue {
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
  };
  comments: number;
  html_url: string;
}

export function Post() {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const [issue, setIssue] = useState<GitHubIssue | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIssue() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/JhoniMattos/Github-Blog/issues/${issueNumber}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setIssue(data);
      } catch (error) {
        console.error("Erro ao buscar issue:", error);
      } finally {
        setLoading(false);
      }
    }

    if (issueNumber) {
      fetchIssue();
    }
  }, [issueNumber]);

  if (loading) return <p>Carregando...</p>;
  if (!issue) return <p>Issue não encontrada.</p>;

  return (
    <PostContainer>
      <Header
        title={issue.title}
        user={issue.user.login}
        createdAt={issue.created_at}
        comments={issue.comments}
        issueUrl={issue.html_url}
      />
      <PostContent style={{ whiteSpace: "pre-wrap" }}>{issue.body}</PostContent>
    </PostContainer>
  );
}
