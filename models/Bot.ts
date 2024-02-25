import mongoose, { Document, Schema, Types } from "mongoose";
import { ConversationDocument } from "./Conversation";

interface IBot {
  name: string;
  mainPurpose: string;
  image: string;
  conversations: Types.ObjectId[] | ConversationDocument[];
}

export interface BotDocument extends IBot, Document {}

const BotSchema: Schema<BotDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mainPurpose: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    conversations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
  },
  { timestamps: true }
);

let BotModel: mongoose.Model<BotDocument>;

try {
  // Try to retrieve an existing model
  BotModel = mongoose.model<BotDocument>("Bot");
} catch (e) {
  // If the model doesn't exist, define it
  BotModel = mongoose.model<BotDocument>("Bot", BotSchema);
}

export const Bot = BotModel;
