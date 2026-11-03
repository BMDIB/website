// The event date and time are stored as local Pacific calendar values.
// UTC is used here only as a neutral formatting mechanism so that the
// build machine's timezone does not change the displayed values.

// Example, if there are date: "2026-11-14" and time: "17:00"
// in Markdown, it converts 2026/11/14 00:00 UTC time to this specific
// weekday, year, month, day format. 

export function formatDate(date: string): string {
	const [year, month, day] = date.split("-").map(Number);

	return new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	}).format(new Date(Date.UTC(year, month - 1, day)));
}

export function formatTime(time: string): string {
	const [hour, minute] = time.split(":").map(Number);

	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
		timeZone: "UTC",
	}).format(new Date(Date.UTC(2000, 0, 1, hour, minute)));
}

export function getPacificToday(): string {
	return new Date().toLocaleDateString("en-CA", {
		timeZone: "America/Los_Angeles",
	});
}