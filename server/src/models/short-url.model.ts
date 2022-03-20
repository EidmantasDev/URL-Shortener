import { Schema, model } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvxyz", 6);

export interface ShortURL {
    id: string;
    urlToTransform: string;
}

const schema = new Schema<ShortURL>({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(),
    },
    urlToTransform: {
        type: String,
        required: true
    }
});

const ShortUrlModel = model<ShortURL>("shortUrl", schema);

export default ShortUrlModel;