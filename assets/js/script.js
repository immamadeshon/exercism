// exercism Hello World ...

export function hello() {
  return 'Hello, World!';
}
console.log(hello);

// exercism TwoFer ...

export const twoFer = name => {
  return name ? `One for ${name}, one for me.` : `One for you, one for me.`;
};

// exercism Leap ...

export function isLeap(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

// exercism Pangram ...

export function isPangram(sentence) {
  const letters = sentence.toLowerCase().match(/[a-z]/g);
  if (!letters) return false;

  const unique = new Set(letters);
  return unique.size === 26;
}

// Pascal's Triangle...

export const rows = (count) => {
  if (count === 0) {
    return [];
  }
  
  const triangle = [[1]];
  
  for (let row = 1; row < count; row++) {
    const prevRow = triangle[row - 1];
    const newRow = [1]; 
    
    for (let col = 1; col < row; col++) {
      newRow.push(prevRow[col - 1] + prevRow[col]);
    }
    
    newRow.push(1); 
    triangle.push(newRow);
  }
  
  return triangle;
};
