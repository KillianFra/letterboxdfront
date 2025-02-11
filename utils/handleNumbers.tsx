export function formatNumber(num: string | number): string | number {
    let parsedNum: number;
    try {
        // Parse the number to a float and round it to the nearest integer.

        parsedNum = Math.round(parseFloat(num as string));
    }
    catch (e) {
        console.error(e);
        return num;
    }
    // Define the suffixes for thousand, million, billion, etc.
    const suffixes = ["", "k", "M", "B", "T"];
    
    // If the number is less than 1000, return it as is.
    if (parsedNum < 1000) return num.toString();
  
    // Determine the index for the suffix based on the number's length.
    const suffixIndex = Math.floor(Math.log10(parsedNum) / 3);
    
    // Divide the number by the appropriate power of 1000.
    const scaled = parsedNum / Math.pow(1000, suffixIndex);
    
    // Format the number with one decimal point if needed.
    // For instance, 1500 -> "1.5k", while 10000 -> "10k"
    const formatted = scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1);
    
    return formatted + suffixes[suffixIndex];
  }
  