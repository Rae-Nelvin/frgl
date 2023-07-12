import './globals.css';
import Navbar from './navbar';
import Section1 from './section-1';
import Section2 from './section-2';
import Section3 from './section-3';
import Cookies from './cookies';

export const metadata = {
  title: 'FRGL',
  description: 'Curate Your Own Style.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Cookies />
        {/* {children} */}
        <Section1 />
        <Section2 />
        <Section3 />
      </body>
    </html>
  )
}
