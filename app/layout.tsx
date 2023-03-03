import Header from './components/Header';
import './globals.css';
import { Space_Grotesk } from '@next/font/google';
import SocialIcons from './components/SocialIcons';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '600', '700'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={spaceGrotesk.className}>
			<head />
			<body className="bg-[#1b1f24] text-white w-full h-full">
				<Header />
				{children}
				<SocialIcons />
			</body>
		</html>
	);
}
