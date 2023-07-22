/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Sponsor } from "@/types";
import React from "react";
import Modal from "react-modal";
import AvatarImage from "../../images/b-and-beans.png";
import { useRouter } from "next/navigation";

export default function SponsorModal({
	sponsor,
	isOpen,
	onClose,
}: {
	sponsor: Sponsor;
	isOpen: boolean;
	onClose: () => void;
}) {
	const router = useRouter();
	function sponsorClick() {
		router.push("/sponsor/new");
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Sponsor Detail Modal'
			className='p-4 w-full md:w-1/2 mx-auto mt-24 rounded bg-white'
		>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold'>Sponsor Info</h2>
				<button onClick={onClose} className='text-lg font-bold'>
					Press ESC to close
				</button>
			</div>

			<div className='flex items-center justify-center'>
				<Image
					src={AvatarImage} // replace with your image URL
					alt='Creator Avatar'
					width={96} // replace with your image width
					height={96} // replace with your image height
					className='rounded-full'
				/>
				<div className='ml-10'>
					<h2 className='text-2xl font-bold  my-4'>{sponsor.displayName}</h2>
					<button
						onClick={() => {
							navigator.clipboard.writeText(sponsor.walletAddress);
						}}
					>
						<p className='text-sm text-blue-400  mb-4'>
							{sponsor.walletAddress}
						</p>
					</button>
				</div>
			</div>

			<p className='flex text-gray-400 mb-2 justify-end'>
				You've been sponsored by them {sponsor.yourSponsorships} times
			</p>
			<ul className='mb-2'>
				<li className='mb-2'>{sponsor.totalSponsorships} sponsorships</li>
				<li className='mb-2'>Funds provided: {sponsor.totalEarnings} ETH</li>
				<li className='mb-2'>
					Funds provided to you: {sponsor.yourEarnings} ETH
				</li>
			</ul>

			<div className='flex justify-center'>
				<button
					className='px-8 py-4 rounded bg-blue-500 text-white font-bold text-2xl mx-auto justify hover:opacity-50'
					onClick={sponsorClick}
				>
					Sponsor
				</button>
			</div>
		</Modal>
	);
}
