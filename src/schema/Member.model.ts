import mongoose, { Schema } from "mongoose";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";

const MemberSchema = new Schema({
  memberType: {
    type: String,
    enum: MemberType,
    default: MemberType.USER,
  },
  memberStatus: {
    type: String,
    enum: MemberStatus,
    default: MemberStatus.ACTIVE,
  },
  memberNick: {
    type: String,
    index: { unique: true, sparse: true },
    required: true,
  },
  memberPhone: {
    type: String,
    index: { unique: true, space: true },
    required: true,
  },
  memberPassword: {
    type: String,
    select: false,
    required: true,
  },
  memberAdress: {
    type: String,
  },
  memberDesc: {
    type: String,
  },
  memberImage: {
    type: String,
  },
  memberPoint: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Member", MemberSchema);
