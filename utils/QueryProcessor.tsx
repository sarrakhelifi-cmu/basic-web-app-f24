export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "skhelifi";
  }

  if (query.toLowerCase().includes("what is your name")) {
    return "skhelifi-313";
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

  // Handle multiplication queries (e.g., "What is 30 multiplied by 10?")
  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const product = parseInt(numbers[0]) * parseInt(numbers[1]);
      return product.toString();
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

  // Handle square and cube queries (e.g., "Which of the following numbers is both a square and a cube?")
  if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const squaresAndCubes = numbers.filter((num) => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      });
      return squaresAndCubes.length > 0 ? squaresAndCubes[0].toString() : "None found";
    }
    return "Invalid query"; // In case the query is malformed
  }

  return "";
}
