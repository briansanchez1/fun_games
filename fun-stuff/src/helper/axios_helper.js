import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.quotable.io/quotes/random?maxLength=100",
});

export const fetchQuote = async () => {
  try {
    const response = await instance.get();
    if (response.status === 200) {
      const quote = [response.data[0]?.author, response.data[0]?.content];
      return quote || "Error fetching quote.";
    } else {
      throw new Error("Failed to fetch quote");
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
};
