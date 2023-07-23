import { Context } from "@/providers/provider";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Header = ({ noWallet }: { noWallet?: boolean }) => {
	const { walletAddress } = useContext(Context);
	const router = useRouter();
	const connectWallet = () => {
		router.push("/");
	};

	return (
		<div className='mb-20'>
			<header className='fixed top-0 left-0 z-50 w-full p-6 bg-white border-b-2 border-red-600'>
				<div className='container mx-auto flex items-center justify-between'>
					<button
						onClick={() => {
							if (!walletAddress) {
								router.push("/");
							} else {
								router.push("/home");
							}
						}}
					>
						<div className='text-2xl font-extrabold tracking-wider text-red-600'>
							ETHWaldo
						</div>
					</button>
					{!noWallet && (
						<button
							className='px-4 py-2 border-2 border-red-600  font-bold rounded-none'
							onClick={connectWallet}
						>
							{walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
						</button>
					)}
				</div>
			</header>
		</div>
	);
};

export default Header;
