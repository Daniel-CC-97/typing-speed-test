import { useEffect, useState } from "react";
import { QuoteType } from "../../types/quote";
import { fetchRandomQuote } from "../../api";
import Keyboard from "../Keyboard/Keyboard";
import Quote from "../Quote/Quote";

const TypingTest: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const fetchedQuote = await fetchRandomQuote();
      setQuote(fetchedQuote);
    };
    fetchQuote();
  }, []);

  return (
    <>
      <Quote quote={quote}></Quote>
      <Keyboard />
    </>
  );
};

export default TypingTest;
