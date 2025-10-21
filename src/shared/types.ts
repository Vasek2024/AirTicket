export interface Ticket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: "RUB";
  startTime: string;
  endTime: string;
  duration: number;
  connectionAmount: number;
}

export interface Airports {
  code: string;
}

export interface Companies {
  name: string;
  logo: string;
  alt: string;
}

export interface Criterion {
  value: string;
}

export interface Transfers {
  value: number;
  label: string;
  selected: boolean;
}

export interface CompanyName {
  value: string;
  selected: boolean;
}
