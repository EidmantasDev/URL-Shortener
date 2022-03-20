import mongoose from "mongoose";
import config from "config";

async function connectToDatabase() {
    const uri = config.get("mongoUri") as string;
    try {
        await mongoose
            .connect(uri)
            .then(() => {
                console.log(`Database connected!`);
            })
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;