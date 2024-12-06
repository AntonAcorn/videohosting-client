import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "./globals.scss";
import Layout from "@/components/Layout";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Video hosting",
	description: "Video hosting",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={notoSans.className}>
				<div>
					<Layout>{children}</Layout>		
				</div>
				</body>
		</html>
	);
}
