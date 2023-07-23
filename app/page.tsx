"use client";
import { Context } from "@/providers/provider";
import "@Biconomy/web3-auth/dist/src/style.css";
import SocialLogin from "@biconomy/web3-auth";
import { ethers } from "ethers";
import Image from "next/image";
import BackgroundImage from "../images/auth.png";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import Header from "@/components/core/Header";
import { ChainId } from "@biconomy/core-types";
export default function Login() {
	const router = useRouter();
	const { setWalletAddress } = useContext(Context);

	const logout = async () => {
		//         setLoggedIn(false);
		//         setWalletAddress("");
		//         enableInterval(false);
	};

	async function login() {
		// create an instance of SocialLogin
		const socialLogin = new SocialLogin();
		// init social login SDK, all params are optional
		await socialLogin.init({
			chainId: ethers.utils.hexValue(ChainId.GOERLI).toString(),
		network: "testnet"
	});

		// pops up the UI widget
		socialLogin.showWallet();
		// get signature that corresponds to your website domains
		const signature1 = await socialLogin.whitelistUrl("http://localhost:3000/");
		// pass the signatures, you can pass one or many signatures you want to whitelist
		await socialLogin.init({
			whitelistUrls: {
				"http://localhost:3000/": signature1,
			},
			
		});
		if (!socialLogin?.provider) return;
		// create a provider from the social login provider that
		// will be used by the smart account package of the Biconomy SDK
		const provider = new ethers.providers.Web3Provider(socialLogin.provider);
		// get a list of accounts available with the provider
		const accounts = await provider.listAccounts();
		console.log("EOA address", accounts);
		setWalletAddress(accounts[0]);
		socialLogin.hideWallet();
		router.push("/home");
	}
	return (
		<main className='relative'>
			<div className='absolute inset-0 z-0 '>
				<Image
					src={BackgroundImage}
					layout='fill'
					objectFit='cover'
					alt='background'
				/>
			</div>
			<Header noWallet />
			<div className='min-h-screen flex flex-col text-red-600'>
				<div className='flex-1 flex'>
					<div className='flex-1 flex items-center justify-center'>
						<button
							className='px-8 py-4 rounded-none border-2 border-red-600 text-red-600 font-extrabold text-3xl bg-white hover:bg-red-100 z-10'
							onClick={login}
						>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
