const getOptions = (row = 2, column = 5) => {
  const arr = new Array(row).fill({})
  for (const i in arr) {
    const title = `标题${i}`
    const list = []
    let col = 0
    while (col < column) {
      const label = `option${i}-${col}`
      list.push(label)
      col++
    }
    arr[i] = {
      title,
      list,
    }
  }
  return arr
}

export default getOptions
