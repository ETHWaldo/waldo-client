
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import { useRouter } from "next/navigation";





export const EASContractAddress = "0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A"; // Sepolia v0.26

const privateKey = "d4b1453f9b88957eaf63867d21b164b7e4e0586c87490d2099fa751eb7e85dc1";
		

type AttestData = {
	title: string;
	description: string;
	script: string;
	files: any;
	url: string;
	trigger: string;
	payment: number;
	currency: string;
};

export default function AttestationButton({
	title,
	description,
	script,
	files,
	url,
	trigger,
	payment,
	currency,
}: AttestData) {
	const router = useRouter()

	async function handleSubmit(	) {

	// Initialize the sdk with the address of the EAS Schema contract address
	const eas = new EAS(EASContractAddress);
	
	// Gets a default provider (in production use something else like infura/alchemy)
	const provider = ethers.providers.getDefaultProvider(
		"sepolia"
	);
	
	// Connects an ethers style provider/signingProvider to perform read/write functions.
	// MUST be a signer to do write operations!
	eas.connect(provider);
		console.log(privateKey)
	const signer = new ethers.Wallet(privateKey, provider);

	// Initialize the EAS SDK
	eas.connect(signer);

	// Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
    const encodedData = schemaEncoder.encodeData([
    { name: "eventId", value: 1, type: "uint256" },
    { name: "voteIndex", value: 1, type: "uint8" },
    ]);

	const schemaUID = "0xdf4c41ea0f6263c72aa385580124f41f2898d3613e86c50519fc3cfd7ff13ad4";

	const tx = await eas.attest({
	schema: schemaUID,
	data: {
		recipient: "0xc6c80A34b414de933de5a074807A2676317eeF3E",
		expirationTime: 0,
		revocable: true,
		data: encodedData,
	},
	});

	const newAttestationUID = await tx.wait();

	console.log("New attestation UID:", newAttestationUID);
	router.push("/sponsor")

	}
	
	return (
		<div className='flex justify-center my-10'>
			<button
				className='px-8 py-4 rounded bg-red-600 text-white font-bold text-2xl mx-auto justify hover:opacity-50'
				onClick={handleSubmit}
			>
				Continue
			</button>
		</div>
	);
}


