"use client";

import React, { useState } from "react";
import { Creator, Sponsorship } from "@/types";
import SponsorshipModal from "../modals/sponsorship.modal";

type SponsorshipCardProps = {
	creator: Creator;
	sponsorship: Sponsorship;
};

export default function SponsorshipCard({
	creator,
	sponsorship,
}: SponsorshipCardProps) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
	return (
		<button
			className='card bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition-shadow duration-200 ease-in-out flex justify-between w-full'
			onClick={openModal}
		>
			<div className='text-left'>
				<h2 className='font-bold text-xl mb-1'>{creator.displayName}</h2>
				<p className='text-gray-600 mb-2'>@{creator.username}</p>
				<p className='text-gray-400 mb-2'>{creator.walletAddress}</p>
			</div>
			<div className='text-right'>
				<p className='text-blue-600 mb-2 font-bold'>{sponsorship.cost} ETH</p>
				<p className='text-gray-600 mb-2'>{sponsorship.numOfVideos} videos</p>
				<p className='text-gray-600 mb-2'>Trigger: {sponsorship.trigger}</p>
			</div>
			<SponsorshipModal
				sponsorship={sponsorship}
				creator={creator}
				isOpen={modalIsOpen}
				onClose={closeModal}
			/>
		</button>
	);
}
