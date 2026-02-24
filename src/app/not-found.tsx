import Link from 'next/link'

export default function NotFound() {
  return (
    <div id="wrapper" className="page">
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        <Link href="/">Go back home</Link>
      </div>
    </div>
  )
}
