import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from './components/Header';
import SocialSideBar from './components/SocialSideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ApexKV',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-black w-full h-screen`}>
				{/* <Header />
				<SocialSideBar /> */}
				<div className="flex flex-row w-full h-screen justify-center items-center">
					<div className="container">{children}</div>
				</div>
			</body>
		</html>
	);
}
