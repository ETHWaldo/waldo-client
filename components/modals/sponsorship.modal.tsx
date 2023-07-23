"use client";

import React, { useState } from "react";
import { Creator, Sponsorship } from "@/types";
import Modal from "react-modal";
import CreatorCard from "../cards/creator.card";

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
			className='p-4 w-full md:w-1/2 mx-auto mt-24 rounded-none border-2 border-red-600 bg-white'
		>
			<div className='flex justify-between items-center mb-2'>
				<h2 className='text-2xl font-bold text-red-600'>Sponsorship Info</h2>
				<button onClick={onClose} className='text-lg font-bold text-red-600'>
					Press ESC to close
				</button>
			</div>
			<CreatorCard creator={creator} disabled />

			<ul className='mt-4 mb-2 text-red-600'>
				<li className='mb-2'>{sponsorship.numOfVideos} videos</li>
				<li className='mb-2'>Cost: {sponsorship.cost} ETH</li>
				<li className='mb-2'>Trigger: {sponsorship.trigger}</li>
				<li className='mb-2'>URL: {sponsorship.sponsorURL}</li>
				<li className='mb-2'>Script: {sponsorship.script}</li>
			</ul>
		</Modal>
	);
}
