import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

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
  async function handleSubmit(attestationData: AttestData) {
    try {
		console.log('hello')
		const provider = ethers.providers.getDefaultProvider("sepolia");

		// Connect to EAS using a signer to perform write operations
		const privateKey = process.env.PRIVATE_KEY;

		if (!privateKey) {
			console.error("Private key not found. Make sure PRIVATE_KEY environment variable is set.");
			process.exit(1);
		}

		const signer = new ethers.Wallet(privateKey, provider);
		const eas = new EAS(EASContractAddress);
		eas.connect(signer);

		// Convert attestationData to encodedData using SchemaEncoder
		const schemaString = "string title, string description, string script, string files, string url, string trigger, uint256 payment, string currency";
		const schemaEncoder = new SchemaEncoder(schemaString);

		const encodedData = Object.keys(attestationData).map((key) => ({
			name: key,
			value: attestationData[key],
			type: schemaEncoder.getFieldType(key),
		}));

		const schemaUID = "0xdf4c41ea0f6263c72aa385580124f41f2898d3613e86c50519fc3cfd7ff13ad4";

		const tx = await eas.attest({
			schema: schemaUID,
			data: JSON.stringify({
				recipient: "0xc6c80A34b414de933de5a074807A2676317eeF3E",
				expirationTime: 0,
				revocable: true,
				data: encodedData,
			}),
			});

		const newAttestationUID = await tx.wait();

		console.log("New attestation UID:", newAttestationUID);
		} catch (error) {
		console.error("Error occurred:", error);
		process.exit(1);
		}
	}

  return (
    <div className='flex justify-center my-10'>
      <button
        className='px-8 py-4 rounded bg-red-600 text-white font-bold text-2xl mx-auto justify hover:opacity-50'
        onClick={() => handleSubmit({ title, description, script, files, url, trigger, payment, currency })}
      >
        Continue
      </button>
    </div>
  );
}
