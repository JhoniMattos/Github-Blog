export async function fetchGitHubUser(username: string, token: string) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar usuário do GitHub");
  }

  return await response.json();
}
