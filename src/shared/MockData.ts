import { Airports, Ticket, Companies } from "./types";
import victoryLogo from "../assets/victory.png";
import redWingsLogo from "../assets/RedWings.png";
import s7Logo from "../assets/S7.png";

const airports: Airports[] = [
  { code: "DME" },
  { code: "SVO" },
  { code: "VKO" },
  { code: "ZIA" },
  { code: "LED" },
  { code: "UFA" },
  { code: "KZN" },
  { code: "AER" },
  { code: "ROV" },
  { code: "SVX" },
  { code: "KRR" },
  { code: "OVB" },
  { code: "CEK" },
  { code: "KJA" },
  { code: "UUD" },
  { code: "VVO" },
];

const generateTickets = (): Ticket[] =>
  Array.from({ length: 30 }, (_, idx) => generateTicket(idx));

const generateTicket = (id: number): Ticket => {
  const startTime = getDepartureTime();
  const duration = getRandomDuration();
  const endTime = getLandindTime(startTime, duration);

  return {
    id: id + 1,
    from: getRandomAirport().code,
    to: getRandomAirport().code,
    company: getRandomCompany(),
    price: getRandomNumber(5000, 100000),
    currency: "RUB",
    startTime,
    endTime,
    duration,
    connectionAmount: getRandomNumber(0, 3),
  };
};

const getRandomAirport = (): Airports =>
  airports[Math.floor(Math.random() * airports.length)];

const getDepartureTime = (): string => {
  const hour = getRandomNumber(0, 23).toString().padStart(2, "0");
  const minute = getRandomNumber(0, 59).toString().padStart(2, "0");
  return `${hour}:${minute}`;
};

const getRandomDuration = (): number => getRandomNumber(60, 24 * 60);

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getLandindTime = (startTime: string, duration: number): string => {
  const startHour = Number(startTime.split(":")[0]);
  const startMinute = Number(startTime.split(":")[1]);
  const endHour = Math.floor((startHour + duration / 60) % 24);
  const endMinute = Math.floor((startMinute + (duration % 60)) % 60);

  return `${endHour.toString().padStart(2, "0")}:${endMinute
    .toString()
    .padStart(2, "0")}`;
};

const getRandomCompany = (): string => {
  const commpanyNames = Object.keys(companies);
  return commpanyNames[Math.floor(Math.random() * commpanyNames.length)];
};

export const companiesData = [
  {
    key: "pobeda",
    name: "Победа",
    logo: victoryLogo,
    alt: "Логотип компании Победа",
  },
  {
    key: "redWings",
    name: "Red Wings",
    logo: redWingsLogo,
    alt: "Логотип компании Red Wings",
  },
  { key: "S7", name: "S7", logo: s7Logo, alt: "Логотип компании S7" },
];

export const companies: { [key: string]: Companies } = Object.fromEntries(
  companiesData.map((company) => [
    company.key,
    {
      name: company.name,
      logo: company.logo,
      alt: company.alt,
    },
  ])
);

export default generateTickets;
