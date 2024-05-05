import LexiconWord from "./types/LexiconWord";

export async function fetchAllWords(): Promise<LexiconWord[]> {
  const response = await fetch("http://localhost:5094/Dictionary/GetAllWords");
  const resData: LexiconWord[] = await response.json();
  if (!response.ok) {
    console.log("ne valja");
    throw new Error("Failed to fetch user places");
  }

  return resData;
}
