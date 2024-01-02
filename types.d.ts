export interface IUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  company: string;
}

export type IRepoData = [
  {
    name: string;
    id: number;
    html_url: string;
    size: number;
    stargazers_count: number;
    language: string;
    forks_count: number;
    description: string;
    html_url: string;
  }
];
export interface IRepo {
  name: string;
  id: number;
  html_url: string;
  size: number;
  stargazers_count: number;
  language: string;
  forks_count: number;
  description: string;
}

export type ILanguageData = [
  {
    label: string;
    value: number;
    color: string;
  }
];

export interface IChart {
  title: string;
  children: React.ReactNode;
}

export interface IProps {
  languageData?: ILanguageData;
  repoData?: IRepoData;
  sortedStars?: IRepoData;
  starredLanguages?: IRepoData;
  handleChange?;
}
