import './globals.css';
import Navbar from './navbar';
import Section1 from './section-1'

export const metadata = {
  title: 'FRGL',
  description: 'Curate Your Own Style.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* {children} */}
        <Section1 />
      </body>
    </html>
  )
}
