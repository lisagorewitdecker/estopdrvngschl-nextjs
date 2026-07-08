import path from "path";
import { promises as fs } from "fs";

const filename = path.join(process.cwd(), "public", "myfile.html");

export default async function api(req, res) {
  try {
    const content = await fs.readFile(filename, "utf-8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).end(content);
  } catch (error) {
    console.error("Failed to load myfile.html:", error);
    res.status(500).json({ error: "Failed to load myfile.html." });
  }
}
