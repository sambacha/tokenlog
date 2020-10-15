import { Owner } from './Owner';

export interface Repository {
  id: number;
  name: string;
  fullName: string;
  description: string; // enum or list
  owner: Owner;
  url: string;
  homepage: string;
  stargazersCount: number;
  watchersCount: number;
  forksCount: number;
  openIssueCount: number;
}
