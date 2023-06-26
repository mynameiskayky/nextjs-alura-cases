import Link from "../src/components/Link"

export default function HomePage() {
  
  function Title({ children, as }) {
    const Tag = as
    return (
      <>
        <Tag>
          {children}
        </Tag>
        <style jsx>{`
          ${Tag} {
            color: red;
          }
        `}</style>
      </>
    )
  }

  return (
    <div>
      <Title as="h1">Alura Cases - Home</Title>
      <Link href="/faq">
        Ir para o FAQ
      </Link>
    </div>
  )
}