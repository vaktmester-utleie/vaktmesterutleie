export async function sendMail<T>(body: T) {
  console.log(body)
  await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}
