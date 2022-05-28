export const nameContains = (content: string) => {
  if (!content) return {}
  return {
    OR: [
      {
        model: {
          contains: content,
          mode: 'insensitive'
        }
      },
      {
        manufacturer: {
          name: {
            contains: content,
            mode: 'insensitive'
          }
        }
      }
    ]
  }
}
