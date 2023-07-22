import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
	const [account, setAccount] = useState("");
	const router = useRouter();
	const connectWallet = () => {
		router.push("/auth");
	};
	return (
		<div className='flex items-center justify-between p-6 bg-red-300 w-full'>
			<button onClick={() => router.push("/")}>
				<div className='text-white font-bold text-xl'>ETHWaldo</div>
			</button>
			<button
				className='bg-white text-blue-500 px-4 py-2 rounded font-bold'
				onClick={connectWallet}
			>
				{account ? `Connected: 0x...` : "Connect Wallet"}
			</button>
		</div>
	);
};

export default Header;
