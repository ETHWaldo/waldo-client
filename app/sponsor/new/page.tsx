"use client";

import CreatorCard from "@/components/cards/creator.card";
import Header from "@/components/core/Header";
import { topCreators } from "@/data";
import React, { useState } from "react";

export default function NewSponsorship() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [script, setScript] = useState("");
	const [files, setFiles] = useState([]);
	const [url, setURL] = useState("");
	const [trigger, setTrigger] = useState("");
	const [payment, setPayment] = useState(0);
	const [currency, setCurrency] = useState("");

	const handleFileChange = (event: any) => {
		// @ts-expect-error
		setFiles([...files, ...event.target.files]);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
	};

	const handleRemoveFile = (index: number) => {
		setFiles(files.filter((_, fileIndex) => fileIndex !== index));
	};

	return (
		<div className='pt-20 bg-white'>
			<Header />
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl my-4 text-red-600'>Create a sponsorship</h1>
				<CreatorCard creator={topCreators[0]} disabled />
				<p className='mt-4'>
					As a sponsor, you are creating your sponsorship deal. You can
					customize a title and description, choose what type of metric you
					would like to use to trigger your payment to the creator, include a
					script for the creator to say in their video, and provide the active
					sponsorship link URL that you would like their audience to use to
					access your product.
				</p>
				<form onSubmit={handleSubmit} className='mb-2 mt-4 flex flex-col'>
					<label className='mb-2 mt-4 text-xl font-bold  text-red-600'>
						Information and Details
					</label>

					<div className='flex flex-col'>
						<label className='mb-2 mt-4'>Title</label>
						<i className='mb-2 text-gray-500'>
							A unique name for this particular sponsorship.
						</i>
						<input
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className='border-red-600 border-2 py-2 px-1'
						/>
					</div>

					<div className='flex flex-col'>
						<label className='mb-2 mt-4'>Description</label>
						<i className='mb-2 text-gray-500'>
							Describe in detail this sponsorship so that the creator
							understands what is required of them.
						</i>
						<textarea
							required
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className='border-red-600 border-2 py-2 px-1'
						/>
					</div>

					<div className='flex flex-col'>
						<label className='mb-2 mt-4 '>Script</label>
						<i className='mb-2 text-gray-500'>
							Anything that you would like to require the creator to say in
							their video content.
						</i>
						<textarea
							value={script}
							onChange={(e) => setScript(e.target.value)}
							className='border-red-600 border-2 py-2 px-1'
						/>
					</div>

					<div className='flex flex-col'>
						<label className='mb-2 mt-4'>Upload Files</label>
						<i className='mb-2 text-gray-500'>
							Add all attachments you think are important for the creator to use
							in their content.
						</i>

						<input
							type='file'
							multiple
							onChange={handleFileChange}
							className='border-red-600 border-2 py-2 px-1'
						/>
						<ul>
							{files.map((file, index) => (
								<li
									key={index}
									className='flex justify-between bg-gray-300 my-2 px-2 py-2'
								>
									{/* @ts-expect-error */}
									{file.name}
									<button onClick={() => handleRemoveFile(index)}>X</button>
								</li>
							))}
						</ul>
					</div>

					<div className='flex flex-col'>
						<label className='mb-2 mt-4'>URL</label>
						<i className='mb-2 text-gray-500'>
							Add a link that you would like the creator to include in their
							post, these clicks will be measured.
						</i>
						<input
							type='text'
							value={url}
							onChange={(e) => setURL(e.target.value)}
							className='border-red-600 border-2 py-2 px-1'
						/>
					</div>
					<div className='mb-2 mt-4 flex flex-col'>
						<label className='mb-2 mt-4 text-xl font-bold  text-red-600'>
							Payment
						</label>
						<i className='mb-2 text-gray-500'>
							Information on how you will pay your creator
						</i>
						<div className='flex flex-row'>
							<div className='flex flex-col mr-4 w-1/2'>
								<label className='mb-2 mt-4'>Amount</label>

								<input
									type='number'
									min='0'
									step='0.01'
									value={payment}
									onChange={(e) => setPayment(Number(e.target.value))}
									className='border-red-600 border-2 py-2 px-1'
								/>
							</div>

							<div className='flex flex-col w-1/2'>
								<label className='mb-2 mt-4'>Currency</label>

								<select
									value={currency}
									onChange={(e) => setCurrency(e.target.value)}
									className='border-red-600 border-2 py-2 px-1'
								>
									<option value=''>--Please choose an option--</option>
									<option value='ETH'>ETH</option>
									<option value='USDC'>USDC</option>
									<option value='MATIC'>MATIC</option>
								</select>
							</div>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='mb-2 mt-4'>Trigger</label>
						<i className='mb-2 text-gray-500'>
							The metric that will trigger the payment to go out.
						</i>
						<select
							value={trigger}
							onChange={(e) => setTrigger(e.target.value)}
							className='border-red-600 border-2 py-2 px-1'
						>
							<option value=''>--Please choose an option--</option>
							<option value='likes'>Likes</option>
							<option value='views'>Views</option>
							<option value='link clicks'>Link Clicks</option>
						</select>
					</div>

					<div className='flex justify-center my-10'>
						<button
							className='px-8 py-4 rounded bg-red-600 text-white font-bold text-2xl mx-auto justify hover:opacity-50'
							onClick={handleSubmit}
						>
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
