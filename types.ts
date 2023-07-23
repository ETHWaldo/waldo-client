export type Creator = {
	displayName: string;
	username: string;
	walletAddress: string;
	views: number;
	likes?: number;
	yourSponsorships?: number;
	totalSponsorships?: number;
	yourEarnings?: number;
	totalEarnings?: number;
};

export type Sponsor = {
	displayName: string;
	walletAddress: string;
	yourSponsorships?: number;
	totalSponsorships?: number;
	yourEarnings?: number;
	totalEarnings?: number;
};

export type Sponsorship = {
	title: string;
	description: string;
	cost: number;
	numOfVideos: number;
	trigger: string;
	sponsorURL: string;
	script: string;
	currency: string;
	walletAddress: string;
};

export type Listing = {
	title: string;
	description: string;
	walletAddress: string;
	cost: number;
	trigger: string;
	sponsorURL: string;
	script: string;
	currency: string;
};
