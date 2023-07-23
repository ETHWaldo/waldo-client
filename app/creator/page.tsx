"use client";

import CreatorCard from "@/components/cards/creator.card";
import ListingCard from "@/components/cards/listing.card";
import SponsorCard from "@/components/cards/sponsor.card";
import SponsorshipCard from "@/components/cards/sponsorship.card";
import Header from "@/components/core/Header";
import {
	completedSponsorships,
	currentListings,
	pendingSponsorships,
	topSponsors,
} from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import BackgroundImage from "../../images/creator.png";

const SponsorDashboard = () => {
	const [search, setSearch] = useState("");
	const [sponsors] = useState(topSponsors); // Mock data
	const [sponsorships] = useState(pendingSponsorships); // Mock data
	const [listings] = useState(currentListings); // Mock data

	const [compSponsorships] = useState(completedSponsorships); // Mock data
	const [balance] = useState(5); // Mock data

	const handleSearchChange = (event: any) => {
		setSearch(event.target.value);
	};

	return (
		<div className='bg-white'>
			<Header />
			<div className='flex pt-16'>
				<div className='w-1/2 p-8'>
					<h2 className='text-2xl font-bold mb-4 text-red-600'>Balance</h2>
					<p className='text-xl'>{balance} ETH</p>

					<h2 className='text-2xl font-bold mt-8 mb-4 text-red-600'>
						Sponsorships
					</h2>
					<input
						className='w-full px-3 py-2 text-lg rounded border border-red-600 mb-4'
						type='text'
						value={search}
						onChange={handleSearchChange}
						placeholder='Search sponsorships...'
					/>

					{search.length === 0 && (
						<h2 className='text-xl font-semibold mb-4'>Top Sponsors</h2>
					)}
					<ul>
						{sponsors.map((sponsor, index) => (
							<li key={index} className='mb-2'>
								<SponsorCard sponsor={sponsor} />
							</li>
						))}
					</ul>
					<h2 className='text-2xl font-bold mt-8 mb-4 text-red-600'>
						Listings
					</h2>
					<input
						className='w-full px-3 py-2 text-lg rounded border border-red-600 mb-4'
						type='text'
						value={search}
						onChange={handleSearchChange}
						placeholder='Search listings...'
					/>

					{search.length === 0 && (
						<h2 className='text-xl font-semibold mb-4'>Top Listings</h2>
					)}
					<ul>
						{listings.map((listing, index) => (
							<li key={index} className='mb-2'>
								<ListingCard listing={listing} />
							</li>
						))}
					</ul>
				</div>

				<div className='w-1/2 p-8'>
					<h2 className='text-2xl font-bold mb-4 text-red-600'>
						Your Sponsorships
					</h2>
					<h3 className='text-xl font-semibold mb-2'>Pending</h3>
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

					<h3 className='text-xl font-semibold mt-6 mb-2'>Complete</h3>
					<ul>
						{compSponsorships.map((sponsorship, index) => (
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
		</div>
	);
};

export default SponsorDashboard;
