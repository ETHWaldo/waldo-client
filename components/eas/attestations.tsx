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
	function handleSubmit() {}
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
