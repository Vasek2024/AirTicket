import { companies } from "../shared/MockData";
import { Ticket } from "../shared/types";

interface Tickets {
  ticket: Ticket;
}

const Tickets: React.FC<Tickets> = ({ ticket }) => {
  const {
    price,
    company,
    from,
    to,
    startTime,
    endTime,
    currency,
    duration,
    connectionAmount,
  } = ticket;
  const companyLogo = companies[company].logo;
  const companyAlt = companies[company].alt;

  const formatPrice = (price: number): string =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const formattedHours = hours > 0 ? `${hours}ч` : "";
    const formattedMinutes = minutes > 0 ? ` ${minutes}м` : "";
    return `${formattedHours}${formattedMinutes}`;
  };

  return (
    <div className="ticket bg-primary-gray rounded-[10px] w-full p-[15px] text-secondary-lavender">
      <div className="top_content flex justify-between mb-4">
        <div className="price text-primary-purple font-bold text-[32px]">
          {formatPrice(price)} {currency}
        </div>
        <img
          className="logo max-w-[250px] max-h-[51px]"
          src={companyLogo}
          alt={companyAlt}
        />
      </div>

      <div className="bottom_content flex justify-between">
        <div className="wrapper flex flex-col gap-[10px]">
          <div className="title">
            {from} - {to}
          </div>
          <div className="content text-primary-purple font-bold">
            {startTime} - {endTime}
          </div>
        </div>

        <div className="wrapper flex flex-col gap-[10px]">
          <div className="title">В пути:</div>
          <div className="content text-primary-purple font-bold">
            {formatDuration(duration)}
          </div>
        </div>

        <div className="wrapper flex flex-col gap-[10px]">
          <div className="title">Пересадки:</div>
          <div className="content flex flex-col items-center gap-[40px] text-primary-purple font-bold">
            {connectionAmount === 0
              ? "Без пересадок"
              : `${connectionAmount} ${
                  connectionAmount === 1 ? "пересадка" : "пересадки"
                }`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
