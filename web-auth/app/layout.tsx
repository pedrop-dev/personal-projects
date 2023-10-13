import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from './_components/Nav'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  	title: 'Auth',
  	description: 'learning auth',
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
  	return (
    	<html lang="pt-br">
			<body className={inter.className}>
				<Nav />
				{children}
				<Footer />
			</body>
    	</html>
  )
}
