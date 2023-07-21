"use client";

import React, { useState } from "react";
import { Creator, Sponsorship } from "@/types";
import Modal from "react-modal";

type SponsorshipModalProps = {
	sponsorship: Sponsorship;
	creator: Creator;
	isOpen: boolean;
	onClose: () => void;
};

export default function SponsorshipModal({
	creator,
	sponsorship,
	isOpen,
	onClose,
}: SponsorshipModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel='Sponsorship Detail Modal'
			className='p-4 w-full md:w-1/2 mx-auto mt-24 rounded bg-white'
		>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold'>Sponsorship Info</h2>
				<button onClick={onClose} className='text-lg font-bold'>
					Press ESC to close
				</button>
			</div>
			<h2 className='text-2xl font-bold my-4'>{creator.displayName}</h2>
			<p className='text-lg text-gray-600 mb-2'>@{creator.username}</p>
			<p className='text-sm text-blue-400 mb-4'>{creator.walletAddress}</p>
			<ul className='mb-2'>
				<li className='mb-2'>{sponsorship.numOfVideos} videos</li>
				<li className='mb-2'>Cost: {sponsorship.cost} ETH</li>
				<li className='mb-2'>Trigger: {sponsorship.trigger}</li>
				<li className='mb-2'>URL: {sponsorship.sponsorURL}</li>
				<li className='mb-2'>Script: {sponsorship.script}</li>
			</ul>
		</Modal>
	);
}
