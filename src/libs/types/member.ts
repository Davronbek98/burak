import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: String;
  memberPhone: String;
  memberPassword?: String;
  memberAdress?: String;
  memberDesc?: String;
  memberImage?: String;
  memberPoint: number;
}
export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: String;
  memberPhone: String;
  memberPassword: String;
  memberAdress?: String;
  memberDesc?: String;
  memberImage?: String;
  memberPoint?: number;
}
