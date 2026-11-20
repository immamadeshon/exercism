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

// resistor color...

export const colorCode = (color) => COLORS.indexOf(color);

export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow','green', 'blue', 'violet', 'grey', 'white',
];

// Sum of Multiples...

export function sum(items, level) {
    const multiples = new Set();

    for (let number = 1; number < level; number++) {
        for (const item of items) {
            if (item !== 0 && number % item === 0) {
                multiples.add(number);
                break;
            }
        }
    }

    let total = 0;

    for (const number of multiples) {
        total += number;
    }

    return total;
}

// ETL

export const transform = (old) => {
  const result = {};
  for (const [score, letters] of Object.entries(old)){
    for (const letter of letters) {
      result[letter.toLowerCase()] = Number(score);
    }
    }
  return result;
};

// Grade School 

export class GradeSchool {
  constructor() {
    this.students = new Map();
  }
  
  add(name, grade) {
    if (this.students.has(name)) {
      return false;
    }
    this.students.set(name, grade);
    return true
  }
  
  roster() {
    return [...this.students.entries()]
    .sort((a, b) => {
      const [nameA, gradeA] = a;
      const [nameB, gradeB] = b;
      return gradeA - gradeB || nameA.localeCompare(nameB);
    })
    .map(([name]) => name);
  }
  
  grade(n) {
    return [...this.students.entries()]
    .filter(([name, grade]) => grade === n)
    .map(([name]) => name)
    .sort();
  }
}