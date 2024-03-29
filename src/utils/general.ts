export function formatNumber(num: string | number) {
  num = Number(num);

  if (isNaN(num)) return 0;

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return formatter.format(num);
}
