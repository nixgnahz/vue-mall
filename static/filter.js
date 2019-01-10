const filter = {
  formatPrice: (price) => {
    return (price / 100).toFixed(2)
  },
  sumPrice: (price, num) => {
    return (price / 100 * num).toFixed(2)
  }
}

export default filter