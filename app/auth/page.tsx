"use client";
import "@Biconomy/web3-auth/dist/src/style.css";
import { useState, useEffect } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ChainId } from "@biconomy/core-types";
import { ethers } from "ethers";
import { IBundler, Bundler } from "@biconomy/bundler";
import {
	BiconomySmartAccount,
	BiconomySmartAccountConfig,
	DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";
import { useRouter } from "next/navigation";
import { useBiconomy } from "@/providers/biconomy";
export default function Login() {
	const router = useRouter();

	const { sdkRef, setSdkRef, smartAccount, setSmartAccount } = useBiconomy();

	const [loading, setLoading] = useState<boolean>(false);
	const [provider, setProvider] = useState<any>(null);
	const [interval, enableInterval] = useState<boolean>();

	const bundler: IBundler = new Bundler({
		bundlerUrl: "https://bundler.biconomy.io/api/v2/5/abc", // you can get this value from biconomy dashboard.
		chainId: ChainId.GOERLI,
		entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
	});

	const paymaster: IPaymaster = new BiconomyPaymaster({
		paymasterUrl:
			"https://paymaster.biconomy.io/api/v1/5/zSh9qcURW.e5496ffd-0391-4007-bbda-cb6fb1042f7d",
	});

	async function login() {
		if (!sdkRef) {
			const socialLoginSDK = new SocialLogin();
			const signature1 = await socialLoginSDK.whitelistUrl(
				"http://127.0.0.1:3000/"
			);
			await socialLoginSDK.init({
				chainId: ethers.utils.hexValue(ChainId.GOERLI).toString(),
				network: "testnet",
				whitelistUrls: {
					"http://127.0.0.1:3000/": signature1,
				},
			});
			setSdkRef(socialLoginSDK);
		}
		if (sdkRef && !sdkRef.provider) {
			sdkRef.showWallet();
			enableInterval(true);
		} else {
			setupSmartAccount();
		}
	}

	async function setupSmartAccount() {
		if (!sdkRef?.provider) return;
		sdkRef.hideWallet();
		setLoading(true);
		const web3Provider = new ethers.providers.Web3Provider(sdkRef.provider);
		setProvider(web3Provider);

		try {
			const biconomySmartAccountConfig: BiconomySmartAccountConfig = {
				signer: web3Provider.getSigner(),
				chainId: ChainId.GOERLI,
				bundler: bundler,
				paymaster: paymaster,
			};
			let biconomySmartAccount = new BiconomySmartAccount(
				biconomySmartAccountConfig
			);
			biconomySmartAccount = await biconomySmartAccount.init();
			console.log("owner: ", biconomySmartAccount.owner);
			console.log(
				"address: ",
				await biconomySmartAccount.getSmartAccountAddress()
			);
			console.log(
				"deployed: ",
				await biconomySmartAccount.isAccountDeployed(
					await biconomySmartAccount.getSmartAccountAddress()
				)
			);

			setSmartAccount(biconomySmartAccount);
			// setLoggedIn(true);
			// setWalletAddress(biconomySmartAccount.owner);
			setLoading(false);
			router.push("/dashboard/user");
		} catch (err) {
			console.log("error setting up smart account... ", err);
		}
	}

	const logout = async () => {
		if (!sdkRef) {
			console.error("Web3Modal not initialized.");
			return;
		}
		await sdkRef.logout();
		sdkRef.hideWallet();
		setSmartAccount(null);
		//         setLoggedIn(false);
		//         setWalletAddress("");
		//         enableInterval(false);
	};

	useEffect(() => {
		let configureLogin: any;
		if (interval) {
			configureLogin = setInterval(() => {
				if (!!sdkRef?.provider) {
					setupSmartAccount();
					clearInterval(configureLogin);
				}
			}, 1000);
		}
	}, [interval]);
	return (
		<div className='flex flex-col justify-start gap-8 pt-48 max-w-lg mx-auto'>
			            <h1 className='text-3xl text-center'>Login</h1>
			            
			<button role='button' onClick={() => login()}>
				                Login with social             
			</button>
			            {loading && <p>Loading...</p>}
			                    
		</div>
	);
}
