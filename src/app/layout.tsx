import '../styles/global.css'

export const metadata = {
  title: 'Studying TailwinsCSS',
  description: 'This is an example to how use TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
