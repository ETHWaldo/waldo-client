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

export type Sponsorship = {
	cost: number;
	numOfVideos: number;
	trigger: string;
	sponsorURL: string;
	script: string;
};
