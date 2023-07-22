"use client";
import { Creator } from "@/types";
import React, { useState } from "react";
import CreatorModal from "../modals/creator.modal";

export default function CreatorCard({
	creator,
	disabled,
}: {
	creator: Creator;
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
				<h2 className='text-2xl font-bold mb-2'>{creator.displayName}</h2>
				<p className='text-lg text-gray-600 mb-2'>@{creator.username}</p>
				<p className='text-sm text-gray-400'>{creator.walletAddress}</p>
			</div>
			<div className='flex items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='h-6 w-6 text-gray-600 mr-2'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 13a9 9 0 0011 0M3 7a13 13 0 0118 0M3 4a16 16 0 0118 0M21 10a9 9 0 11-18 0'
					/>
				</svg>
				<span className='text-lg text-gray-600'>{creator.views}</span>
			</div>
			<CreatorModal
				creator={creator}
				isOpen={modalIsOpen}
				onClose={closeModal}
			/>
		</button>
	);
}
