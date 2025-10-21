import { MongoClient } from "mongodb";

export default async function getClient(data: string) {
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url);

  const db = client.db("db");
  const coll = db.collection("coll");
  await coll.insertOne({ data: data });
}
