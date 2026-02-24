import Link from 'next/link'

export default function NotFound() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        <Link href="/" className="button">Go back home</Link>
      </div>
    </div>
  )
}
