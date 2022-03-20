import { Schema, model } from "mongoose";
import { ShortURL } from "./short-url.model";

interface History {
    shortUrl: ShortURL;
}

const schema = new Schema<History>(
    {
        shortUrl: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "shortUrl",
        },
    },
    {
        timestamps: true
    }
);

const HistoryModel = model<History>("history", schema);

export default HistoryModel;