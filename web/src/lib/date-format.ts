export const formatDate = (iso: string) => {
  if (!iso) return '-'
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
