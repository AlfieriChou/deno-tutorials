import Redis from "npm:ioredis";

const client = new Redis();

const start = async () => {
  await client.set("foo", "bar");
  console.log(await client.get("foo"));
};

start();
