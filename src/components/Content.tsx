import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTickets,
  filterTickets,
  loadMore,
  showTickets,
} from "../shared/Reducers/ticketsReducer";
import SortingTickets from "./SortingTickets";
import Sidebar from "./Sidebar";
import Tickets from "./Tickets";
import ShowMoreTickets from "./ShowMoreTickets";
import { ArrowSelector } from "./ArrowSelector";
import { useWindowSize } from "../shared/myWindowSizeHook";
import { RootState } from "../shared/store";

const Content = () => {
  const { tickets, showMore } = useSelector(
    (state: RootState) => state.tickets
  );
  const { transfers, companyName, criterion } = useSelector(
    (state: RootState) => state.filter
  );
  const filteredTickets = Array.isArray(tickets)
    ? filterTickets(tickets, transfers, companyName.value)
    : [];

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData: () => Promise<void> = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await dispatch(fetchTickets() as any);
        dispatch(showTickets({ criterion }));
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    fetchData();
  }, [criterion, dispatch]);

  const { isMobileSize } = useWindowSize();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="content flex flex-col items-center gap-[40px] w-full max-screen-tablet:gap-[20px]">
      <SortingTickets />
      {isMobileSize && (
        <div className="mobile_dropdown flex flex-col rounded-[10px] w-full text-primary-white bg-primary-purple">
          <div className="menu flex justify-between items-center p-4">
            <p className="text text-[16px]">Авиакомпании, кол-во пересадок</p>
            <button
              className="dropdown text-[12px] flex items-center"
              onClick={handleOpenMenu}
            >
              Открыть настройки
              <span className="arrow">
                <ArrowSelector id={isOpenMenu ? "arrow-up" : "arrow-down"} />
              </span>
            </button>
          </div>
          {isOpenMenu && <Sidebar />}
        </div>
      )}
      {filteredTickets.slice(0, showMore).map((ticket) => (
        <Tickets key={ticket.id} ticket={ticket} />
      ))}
      <ShowMoreTickets loadMoreHandler={() => dispatch(loadMore())} />
    </div>
  );
};

export default Content;
