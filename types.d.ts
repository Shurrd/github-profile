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
}

export type ILanguageData = [
  {
    label: string;
    value: number;
    color: string;
  }
];
