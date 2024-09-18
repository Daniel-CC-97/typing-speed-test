import { Quote } from "./types/quote";

export const fetchRandomQuote = async (): Promise<Quote | null> => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Quote = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetch quote: ", error);
    return null;
  }
};
