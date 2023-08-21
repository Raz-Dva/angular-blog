export default function randomNumberBetween(min: number, max: number): number{
  const randomFraction = Math.random();
  const range = max - min;
  return min + Math.floor(randomFraction * range);
}
