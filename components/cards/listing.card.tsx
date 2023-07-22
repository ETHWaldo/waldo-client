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
			className='card bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition-shadow duration-200 ease-in-out flex justify-between w-full'
			onClick={openModal}
			disabled={disabled}
		>
			<div className='text-left'>
				<h2 className='text-2xl font-bold mb-2'>{listing.title}</h2>
				<p className='text-sm text-gray-400'>{listing.walletAddress}</p>
			</div>
			<div className='flex items-center'>
				<span className='text-lg text-gray-600'>
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
