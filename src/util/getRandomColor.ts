export const getRandomColor = () => {
  const colorValues = [
    "0","1","2","3","4","5","6","7",
    "8","9","a","b","c","d","e","f"
  ]

  let randomColor = "#"

  for (let i = 0; i < 6; i++) {
    const randomIndex = parseInt((Math.random()*colorValues.length).toString())
    randomColor += colorValues[randomIndex]
  }

  return randomColor
}