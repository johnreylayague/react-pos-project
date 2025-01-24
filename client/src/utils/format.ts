// Formats a string or number to Philippine Pesos currency format, defaulting to 0 for invalid strings
export const formatToPesos = (value: string | number) => {
  const numericValue =
    typeof value === "string" ? (isNaN(parseFloat(value)) ? 0 : parseFloat(value)) : value;

  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);
};

// Formats a given date string into a US date-time format (MM/DD/YY HH:MM AM/PM)
export const formatDateTime = (date: string) => {
  const parsedDate = new Date(date);

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = parsedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} ${formattedTime}`;
};

export const formatStartTime = (date: string) => {
  const parsedDate = new Date(date);

  const formattedShiftStartDate = parsedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedShiftStartDate;
};

export const formatShortDate = (date: string) => {
  const parsedDate = new Date(date);

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};

export const formatShiftDateRange = (shiftStartDate: string, shiftEndDate: string) => {
  const parsedStartDate = new Date(shiftStartDate);
  const parsedEndDate = new Date(shiftEndDate);

  const formattedShiftStartDate = parsedStartDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formattedShiftEndDate = parsedEndDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formattedShiftDateRange =
    parsedStartDate.getUTCMonth() === parsedStartDate.getUTCMonth()
      ? formattedShiftStartDate
      : `${formattedShiftStartDate} - ${formattedShiftEndDate}`;

  return formattedShiftDateRange;
};
