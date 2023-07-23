"use client";

import CreatorCard from "@/components/cards/creator.card";
import SponsorshipCard from "@/components/cards/sponsorship.card";
import Header from "@/components/core/Header";
import {
	completedSponsorships,
	pendingSponsorships,
	topCreators,
} from "@/data";
import React, { useState } from "react";

const SponsorDashboard = () => {
	const [search, setSearch] = useState("");
	const [creators] = useState(topCreators); // Mock data
	const [sponsorships] = useState(pendingSponsorships); // Mock data
	const [compSponsorships] = useState(completedSponsorships); // Mock data
	const [balance] = useState(5); // Mock data

	const handleSearchChange = (event: any) => {
		setSearch(event.target.value);
	};

	return (
		<>
			<Header />
			<div className='flex pt-16 bg-white'>
				<div className='w-1/2 p-8'>
					<h2 className='text-2xl font-bold text-red-600 mb-4'>Balance</h2>
					<p className='text-xl '>{balance} ETH</p>

					<h2 className='text-2xl font-bold text-red-600 mt-8 mb-4'>
						Creators
					</h2>
					<input
						className='w-full px-3 py-2 text-lg rounded-none border border-red-600 mb-4'
						type='text'
						value={search}
						onChange={handleSearchChange}
						placeholder='Search creators...'
					/>

					{search.length === 0 && (
						<h2 className='text-xl font-semibold  mb-4'>Top Creators</h2>
					)}
					<ul>
						{creators.map((creator, index) => (
							<li key={index} className='mb-2'>
								<CreatorCard creator={creator} />
							</li>
						))}
					</ul>
				</div>

				<div className='w-1/2 p-8'>
					<h2 className='text-2xl font-bold text-red-600 mb-4'>
						Active Sponsorships
					</h2>
					<h3 className='text-xl font-semibold  mb-2'>Pending</h3>
					<ul>
						{sponsorships.map((sponsorship, index) => (
							<li key={index} className='mb-2'>
								<SponsorshipCard
									creator={sponsorship.creator}
									sponsorship={sponsorship.sponsorship}
								/>
							</li>
						))}
					</ul>

					<h3 className='text-xl font-semibold  mt-6 mb-2'>Complete</h3>
					<ul>
						{completedSponsorships.map((sponsorship, index) => (
							<li key={index} className='mb-2'>
								<SponsorshipCard
									creator={sponsorship.creator}
									sponsorship={sponsorship.sponsorship}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default SponsorDashboard;
