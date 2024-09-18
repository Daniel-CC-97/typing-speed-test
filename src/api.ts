import { Quote } from "./types/quote";

export const fetchRandomQuote = async (): Promise<Quote | null> => {
  try {
    const response = await fetch("http://api.quotable.io/quotes/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Quote[] = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching quote: ", error);
    return null;
  }
};
