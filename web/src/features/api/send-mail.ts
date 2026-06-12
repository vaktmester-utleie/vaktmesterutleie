export async function sendMail<T>(body: T) {
  await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}
