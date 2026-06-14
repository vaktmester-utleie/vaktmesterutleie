import Container from '@/components/wrapper/container'

export default function Hero() {
  return (
    <Container className="flex flex-col gap-6 max-w-lg">
      <h1 className="hero-title">Lei utstyr enkelt og rimeleg.</h1>
      <h2 className="hero-subtitle">
        Tilhengarar, stillas, stigar og verktøy til gode prisar. Hent sjølv i
        Valestrandfossen eller avtal levering
      </h2>
    </Container>
  )
}
