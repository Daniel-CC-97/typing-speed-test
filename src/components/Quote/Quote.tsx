import React from "react";
import styles from "./Quote.module.css";
import { QuoteType } from "../../types/quote";

// Define the props type
interface QuoteProps {
  quote: QuoteType | null; // It can be null or a QuoteType object
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <div className={styles.quoteContainer}>
      {quote ? (
        <h3 className={styles.quote}>{quote.content}</h3>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default Quote;
