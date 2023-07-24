import './globals.css';
import Navbar from './navbar';
import Section1 from './section-1';
import Section2 from './section-2';
import Section3 from './section-3';
import Section4 from './section-4';
import Cookies from './cookies';

export const metadata = {
  title: 'FRGL',
  description: 'Curate Your Own Style.',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Cookies />
        {/* {children} */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </body>
    </html>
  )
}
