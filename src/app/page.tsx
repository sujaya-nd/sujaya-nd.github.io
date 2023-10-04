import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sujay Alaspure</h1>
      <Link href="/home">
        <Image src="/favicon.ico" alt="logo" width="100" height="100" />
      </Link>
    </main>
  )
}
