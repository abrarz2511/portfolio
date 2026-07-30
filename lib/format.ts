const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const longDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonthYear(value: string) {
  return monthYearFormatter.format(new Date(`${value}-01T00:00:00Z`));
}

export function formatDate(value: string) {
  return longDateFormatter.format(new Date(`${value}T00:00:00Z`));
}

export function formatDateRange(startDate: string, endDate?: string) {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : "Present";
  return `${start} — ${end}`;
}
