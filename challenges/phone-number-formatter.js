function formatNumber(number) {
  const digits = String(number).replace(/\D+/g, '');
  if (digits.length !== 11) return number;

  const cc = digits[0];
  const area = digits.slice(1, 4);
  const central = digits.slice(4, 7);
  const line = digits.slice(7, 11);

  return `+${cc} (${area}) ${central}-${line}`;
}

console.log(formatNumber('1234567890'));