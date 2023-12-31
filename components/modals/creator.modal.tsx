/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Creator } from "@/types";
import React from "react";
import Modal from "react-modal";
import AvatarImage from "../../images/b-and-beans.png";
import { useRouter } from "next/navigation";

const CreatorModal = ({
	creator,
	isOpen,
	onClose,
}: {
	creator: Creator;
	isOpen: boolean;
	onClose: () => void;
}) => {
	const router = useRouter();
	function sponsorClick() {
		router.push("/sponsor/new");
	}
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Creator Detail Modal'
			className='p-4 w-full md:w-1/2 mx-auto mt-24 bg-white'
		>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold text-red-600'>Creator Info</h2>
				<button onClick={onClose} className='text-lg font-bold text-red-600'>
					Press ESC to close
				</button>
			</div>

			<div className='flex items-center justify-center'>
				<Image
					src={AvatarImage} // replace with your image URL
					alt='Creator Avatar'
					width={96} // replace with your image width
					height={96} // replace with your image height
				/>
				<div className='ml-10'>
					<h2 className='text-2xl font-bold text-red-600 my-4'>
						{creator.displayName}
					</h2>
					<p className='text-lg text-red-600 mb-2'>@{creator.username}</p>
					<button
						onClick={() => {
							navigator.clipboard.writeText(creator.walletAddress);
						}}
					>
						<p className='text-sm text-red-600 mb-4'>{creator.walletAddress}</p>
					</button>
				</div>
			</div>

			<p className='flex text-red-600 mb-2 justify-end'>
				You've sponsored them {creator.yourSponsorships} times
			</p>
			<ul className='mb-2'>
				<li className='mb-2 text-red-600'>{creator.likes} likes</li>
				<li className='mb-2 text-red-600'>
					{creator.totalSponsorships} sponsorships
				</li>
				<li className='mb-2 text-red-600'>
					Funds Earned From Sponsors: {creator.totalEarnings} ETH
				</li>
				<li className='mb-2 text-red-600'>
					Funds Earned From You: {creator.yourEarnings} ETH
				</li>
			</ul>

			<div className='flex justify-center'>
				<button
					className='px-8 py-4 bg-red-600 text-white font-bold text-2xl mx-auto justify hover:opacity-50'
					onClick={sponsorClick}
				>
					Sponsor
				</button>
			</div>
		</Modal>
	);
};

export default CreatorModal;
