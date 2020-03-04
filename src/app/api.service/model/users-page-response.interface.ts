import { User } from "./user.model";

export interface IResponseUsersPage {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string;
    prev_url: string;
  };
  users: User[];
}
