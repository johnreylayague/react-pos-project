export const formatToPesos = (value: any) => {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatDateTime = (date: Date) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} ${formattedTime}`;
};

export const formatStartTime = (date: Date) => {
  const formattedShiftStartDate = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedShiftStartDate;
};

export const formatShortDate = (date: Date) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};

export const formatShiftDateRange = (shiftStartDate: Date, shiftEndDate: Date) => {
  const formattedShiftStartDate = shiftStartDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formattedShiftEndDate = shiftEndDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formattedShiftDateRange =
    shiftStartDate.getUTCMonth() === shiftStartDate.getUTCMonth()
      ? formattedShiftStartDate
      : `${formattedShiftStartDate} - ${formattedShiftEndDate}`;

  return formattedShiftDateRange;
};
