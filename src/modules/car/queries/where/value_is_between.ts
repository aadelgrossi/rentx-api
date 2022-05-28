interface MinMaxValueArgs {
  min: number
  max: number
}

export const valueIsBetween = ({ min, max }: MinMaxValueArgs) => {
  if (!min && !max) return {}
  return {
    dailyRate: {
      gte: min,
      lte: max
    }
  }
}
