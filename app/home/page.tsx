"use client";
import Image from "next/image";
import Header from "@/components/core/Header";
import BackgroundImage from "../../images/background.png";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "@/providers/provider";

export default function Home() {
	const router = useRouter();
	const { walletAddress } = useContext(Context);

	async function creatorClick() {
		router.push("/creator");
	}

	async function sponsorClick() {
		router.push("/sponsor");
	}

	return (
		<main className='relative'>
			<div className='absolute inset-0 z-0 '>
				<Image
					src={BackgroundImage}
					layout='fill'
					objectFit='cover'
					alt='background'
				/>
			</div>
			<Header />
			<div className='min-h-screen flex flex-col text-red-600'>
				<div className='flex items-center justify-center py-10'>
					<h1 className='text-6xl font-bold'>Are you a...</h1>
				</div>
				<div className='flex-1 flex'>
					<div className='flex-1 flex items-center justify-center'>
						<button
							className='px-8 py-4 rounded-none border-2 border-red-600 text-red-600 font-extrabold text-3xl bg-white hover:bg-red-100 z-10'
							onClick={creatorClick}
						>
							Creator
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center'>
						<button
							className='px-8 py-4 rounded-none border-2 border-red-600 text-red-600 font-extrabold text-3xl bg-white hover:bg-red-100 z-10'
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
