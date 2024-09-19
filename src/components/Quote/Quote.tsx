import React from "react";
import styles from "./Quote.module.css";
import { QuoteType } from "../../types/quote";

// Define the props type
interface QuoteProps {
  quote: QuoteType | null; // It can be null or a QuoteType object
  currentIndex: number;
  typedText: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, currentIndex, typedText }) => {
  if (!quote) {
    return <h1>No Quote</h1>;
  }

  const { content } = quote;
  return (
    <div className={styles.quoteContainer}>
      {content.split("").map((char, index) => {
        let className = styles.default;
        let letter = char;
        console.log("letter: ", letter);

        if (index < currentIndex) {
          className = styles.typed;
        }

        if (index === currentIndex) {
          className = styles.current;
        }

        if (letter === " ") {
          letter = "_";
          className = styles.space;
        }
        return (
          <span key={index} className={className}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default Quote;
