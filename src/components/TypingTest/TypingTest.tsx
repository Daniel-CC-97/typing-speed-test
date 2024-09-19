import { useEffect, useState } from "react";
import { QuoteType } from "../../types/quote";
import { fetchRandomQuote } from "../../api";
import Keyboard from "../Keyboard/Keyboard";
import Quote from "../Quote/Quote";

const TypingTest: React.FC = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchQuote = async () => {
      const fetchedQuote = await fetchRandomQuote();
      setQuote(fetchedQuote);
    };
    fetchQuote();
  }, []);

  const handleKeyPress = (key: string) => {
    if (quote && key === quote.content[currentIndex].toUpperCase()) {
      setTypedText((prev) => prev + key);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleKeyRelease = (key: string) => {
    // Handle key release if needed
  };

  return (
    <>
      <Quote quote={quote} currentIndex={currentIndex} typedText={typedText} />
      <Keyboard onKeyPress={handleKeyPress} onKeyRelease={handleKeyRelease} />
    </>
  );
};

export default TypingTest;
