import { Session } from "next-auth";

export interface ExtendedUser extends User {
  _doc?: any;
  id?: string;
  username?: string;
  image?: string;
  count?: number;
  tokens?: number;
}

export interface TokenData {
  id?: string;
  sub?: string;
  username?: string;
  image?: string;
  count?: number;
  tokens?: number;
}

export interface ExtendedSession extends Session {
  user: ExtendedUser;
  token?: TokenData;
}

declare module "next-auth" {
  interface Session extends ExtendedSession {
    id: string; // because id wasnt identified in limiter..
    _doc?: any;
  }
  interface User {
    _doc?: any;    
  }
}
