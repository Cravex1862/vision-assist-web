import './globals.css'

export const metadata = {
  title: 'Vision Assist',
  description: 'Vision Assist – an app that helps describe your surroundings using AI. The website showcases features and links to download the app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  )
}
//this is a test comment