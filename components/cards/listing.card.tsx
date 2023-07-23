"use client";
import { Listing } from "@/types";
import React, { useState } from "react";
import ListingModal from "../modals/listing.modal";

export default function ListingCard({
	listing,
	disabled,
}: {
	listing: Listing;
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
				<h2 className='text-2xl font-bold mb-2'>{listing.title}</h2>
				<p className='text-sm text-gray-400'>{listing.walletAddress}</p>
			</div>
			<div className='flex justify-end'>
				<span className='text-lg text-red-600 '>
					{listing.cost} {listing.currency}
				</span>
			</div>
			<ListingModal
				listing={listing}
				isOpen={modalIsOpen}
				onClose={closeModal}
			/>
		</button>
	);
}
