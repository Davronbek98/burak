import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAdress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoint: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAdress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoint?: number;
}
export interface LoginInput {
  memberNick: "string";
  memberPassword: "string";
}
