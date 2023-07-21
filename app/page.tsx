"use client";

import Header from "@/components/core/Header";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	async function creatorClick() {
		router.push("/creator");
	}

	async function sponsorClick() {
		router.push("/sponsor");
	}
	return (
		<main>
			<Header />
			<div className='min-h-screen flex flex-col'>
				<div className='flex items-center justify-center bg-blue py-10'>
					<h1 className='text-4xl'>Are you a...</h1>
				</div>
				<div className='flex-1 flex'>
					<div className='flex-1 flex items-center justify-center bg-red-300 text-white'>
						<button
							className='px-8 py-4 rounded text-blue-500 font-bold text-2xl bg-white'
							onClick={creatorClick}
						>
							Creator
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center bg-red-300 text-white'>
						<button
							className='px-8 py-4 rounded text-green-500 font-bold text-2xl bg-white'
							onClick={sponsorClick}
						>
							Sponsor
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
