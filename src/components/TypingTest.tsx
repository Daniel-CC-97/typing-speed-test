import { useEffect, useState } from "react";
import { Quote } from "../types/quote";
import { fetchRandomQuote } from "../api";

const TypingTest: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const fetchedQuote = await fetchRandomQuote();
      setQuote(fetchedQuote);
    };
    fetchQuote();
  }, []);

  return (
    <div>{quote ? <h3>{quote.content}</h3> : <p>Loading quote...</p>}</div>
  );
};

export default TypingTest;
