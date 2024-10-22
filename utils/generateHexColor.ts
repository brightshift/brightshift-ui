export const generateHexColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  const color = `#${randomColor}`
  return color
}
