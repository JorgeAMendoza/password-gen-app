const passwordScore = (
  length: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
): 1 | 2 | 3 | 4 => {
  let multiplier = 0;
  let passwordComplexity = 0;

  if (length === 8) multiplier = 1;
  else if (length === 14) multiplier = 1.5;
  else if (length === 20) multiplier = 2;
  else if (length > 8 && length < 14)
    multiplier = 1 + 0.0833 * (6 - (14 - length));
  else multiplier = 1.5 + 0.0833 * (6 - (20 - length));

  console.log(multiplier);

  if (uppercase) passwordComplexity += 5;
  if (lowercase) passwordComplexity += 5;
  if (numbers) passwordComplexity += 5;
  if (symbols) passwordComplexity += 5;

  const passwordScore = Math.floor(multiplier * passwordComplexity);
  console.log(passwordScore);

  if (passwordScore <= 10) return 1;
  else if (passwordScore <= 20) return 2;
  else if (passwordScore <= 35) return 3;
  else return 4;
};

export default passwordScore;
