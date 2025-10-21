import { useDispatch, useSelector } from "react-redux";
import { FilterState, setTransfers } from "../shared/Reducers/filtersReducer";
import { useWindowSize } from "../shared/myWindowSizeHook";

const Transfers = () => {
  const transfers = useSelector((state: FilterState) => state.filter.transfers);
  const dispatch = useDispatch();

  const checkboxs = [
    { id: "nonStop", value: 0, label: "Без пересадок" },
    { id: "1Transfer", value: 1, label: "1 пересадка" },
    { id: "2Transfer", value: 2, label: "2 пересадки" },
    { id: "3Transfer", value: 3, label: "3 пересадки" },
  ];

  const handleCheckbox = (value: number, selected: boolean) => {
    dispatch(setTransfers({ value, selected }));
  };

  const { isMobileSize } = useWindowSize();

  return (
    <div className="wrapper bg-primary-gray rounded-[10px] p-4 max-screen-tablet:bg-transparent max-screen-mobile:p-0">
      <div className="transfer">
        <p className="title text-primary-purple font-bold text-xl max-screen-tablet:text-primary-white max-screen-mobile:text-[16px]">
          {isMobileSize ? "Кол-во пересадок" : "Количество пересадок"}
        </p>
        <div className="checkbox flex flex-col gap-[20px] p-4">
          {checkboxs.map(({ id, value, label }) => (
            <div key={id} className="item text-secondary-lavender">
              <label
                className="label flex gap-[15px] items-center text-base max-screen-tablet:text-primary-white max-screen-mobile:text-[14px] max-screen-mobile:ml-0"
                htmlFor={id}
              >
                <input
                  className="check w-[21px] h-[21px] border-[1px] border-primary-purple cursor-pointer flex justify-center items-center rounded-[4px] appearance-none checked:before:content-['✔'] checked:before:text-primary-purple checked:before:font-bold max-screen-tablet:border-primary-white max-screen-tablet:checked:before:text-primary-white"
                  type="checkbox"
                  value={value}
                  checked={transfers[value].selected}
                  onChange={(e) =>
                    handleCheckbox(value, e.currentTarget.checked)
                  }
                />
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transfers;
