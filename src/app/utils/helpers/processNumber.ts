export const processNumber = (number: number) => {
  if (number < 1000) return number
  if (number >= 1000 && number < 1000000) return `${(number / 1000).toFixed(1)} k`
  if (number >= 1000000 && number < 1000000000) return `${(number / 1000000).toFixed(1)} m`
  if (number >= 1000000000) return `${(number / 1000000000).toFixed(1)} b`
}
