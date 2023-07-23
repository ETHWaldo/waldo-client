"use client";
import { Sponsor } from "@/types";
import React, { useState } from "react";
import SponsorModal from "../modals/sponsor.modal";

export default function SponsorCard({
	sponsor,
	disabled,
}: {
	sponsor: Sponsor;
	disabled?: boolean;
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
	return (
		<button
			className='card bg-white border-2 border-red-600 rounded-none p-4 w-full'
			onClick={openModal}
			disabled={disabled}
		>
			<div className='text-left'>
				<h2 className='text-2xl font-bold mb-2'>{sponsor.displayName}</h2>
				<p className='text-sm text-gray-400'>{sponsor.walletAddress}</p>
			</div>
			<SponsorModal
				sponsor={sponsor}
				isOpen={modalIsOpen}
				onClose={closeModal}
			/>
		</button>
	);
}
