import { Header } from "./components/Header";
import { HomeContainer, PostContainer, PostContent } from "./styles";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface GitHubIssue {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  number: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGitHubIssues(
      search,
      "JhoniMattos",
      "github-blog",
      import.meta.env.VITE_GITHUB_TOKEN
    )
      .then(setIssues)
      .catch(console.error);
  }, [search]);

  async function fetchGitHubIssues(
    query: string,
    username: string,
    repo: string,
    token?: string
  ): Promise<GitHubIssue[]> {
    const q = [`repo:${username}/${repo}`, "is:issue"]
      .concat(query ? [query] : [])
      .join(" ");

    const response = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(q)}`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }
    );

    if (!response.ok) {
      console.error("GitHub search error:", await response.json());
      return [];
    }

    const data = await response.json();
    return data.items || [];
  }

  return (
    <HomeContainer>
      <Header />

      <div className="publications-header">
        <h1>Publicações</h1>
        <span>
          {issues.length} {issues.length === 1 ? "publicação" : "publicações"}
        </span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <PostContainer>
        {issues.map((issue) => (
          <NavLink key={issue.id} to={`/post/${issue.number}`}>
            <PostContent>
              <div className="post-header">
                <h1>{issue.title}</h1>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <p>{issue.body.slice(0, 180)}...</p>
            </PostContent>
          </NavLink>
        ))}
      </PostContainer>
    </HomeContainer>
  );
}
