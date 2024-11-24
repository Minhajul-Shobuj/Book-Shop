import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";
const port = config.port;
const url = config.url;

main().catch((err) => {
  throw err;
});

async function main() {
  try {
    await mongoose.connect(url as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err: any) {
    throw new Error(err);
  }
}
