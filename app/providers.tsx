"use client";
import { Provider as ContextProvider } from "@/providers/provider";

export function Providers({ children }: { children: React.ReactNode }) {
	return <ContextProvider>{children}</ContextProvider>;
}
