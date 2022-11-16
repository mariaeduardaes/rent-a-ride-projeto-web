export const formatDate = (date: number) => {
  return new Intl.DateTimeFormat("fr-CA", {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
  }).format(date);
};

export const formatDateBR = (date: number) => {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
  }).format(date);
};

export const getDate = (date: string) => {
  const [year, month, day] = date.split("-").map(d => Number(d));

  return new Date(year, month - 1, day);
}

export const getDateTime = (date: string) => {
  const [year, month, day] = date.split("-").map(d => Number(d));

  return new Date(year, month - 1, day).getTime();
};