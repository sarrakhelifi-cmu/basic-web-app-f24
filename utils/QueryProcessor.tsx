export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "skhelifi" );
  }
  if (query.toLowerCase().includes("What is your name")) {
    // Add the correct response for the query "What is your name?"
    return "skhelifi-313";  // You can replace this with a specific name if needed.
  }
  // Handle addition queries (e.g., "What is 76 plus 9?")
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
      return sum.toString();
    }
    return "Invalid query"; // In case the query is malformed
  }

  // Handle comparison queries (e.g., "Which of the following numbers is the largest?")
  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers);
      return largest.toString();
    }
    return "Invalid query"; // In case the query is malformed
  }

  return "";
}
