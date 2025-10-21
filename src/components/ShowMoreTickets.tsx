interface ShowMoreProps {
  loadMoreHandler: () => void;
}

// Создаём кнопочку "загрузить ещё"
const ShowMoreTickets: React.FC<ShowMoreProps> = ({ loadMoreHandler }) => {
  function handleClick() {
    loadMoreHandler();
  }

  return (
    <button
      className="showMore cursor-pointer w-full py-4 rounded-[10px] bg-primary-purple text-white text-center font-bold hover:bg-secondary-lavender transition hover:text-primary-purple hover:scale-105 mb-10"
      onClick={handleClick}
    >
      Загрузить ещё билеты
    </button>
  );
};

export default ShowMoreTickets;
