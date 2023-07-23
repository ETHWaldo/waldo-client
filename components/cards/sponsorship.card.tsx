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
			className='card bg-white border-2 border-red-600 rounded-none p-4 w-full'
			onClick={openModal}
		>
			<div className='text-left'>
				<h2 className='text-2xl font-bold mb-2'>{sponsorship.title}</h2>
				<p className='text-sm text-gray-400'>{sponsorship.walletAddress}</p>
			</div>
			<div className='flex justify-end'>
				<span className='text-lg text-red-600 '>
					{sponsorship.cost} {sponsorship.currency}
				</span>
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
