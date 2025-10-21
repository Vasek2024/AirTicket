import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "../shared/Reducers/filtersReducer";
import React from "react";
import { RootState } from "../shared/store";

const SortingTickets = () => {
  const criterion = useSelector((state: RootState) => state.filter.criterion);
  const dispatch = useDispatch();

  const sortingOptions = [
    { id: "cheapest", value: "cheapest", label: "Самый дешевый" },
    { id: "fastest", value: "fastest", label: "Самый быстрый" },
    { id: "optimal", value: "optimal", label: "Самый оптимальный" },
  ];

  const handleRadioChange = (value: string) => {
    dispatch(setSorting({ value }));
  };

  return (
    <div className="sorting flex w-full border-[2px] border-primary-purple rounded-[10px] p-0">
      {sortingOptions.map((option) => (
        <React.Fragment key={option.id}>
          <input
            className="input hidden peer"
            type="radio"
            name={"criterion"}
            value={option.value}
            id={option.id}
            onChange={() => handleRadioChange(option.value)}
            checked={criterion.value === option.value}
          />
          <label
            htmlFor={option.id}
            className="item w-full block bg-primary-gray text-center font-bold text-primary-purple p-[15px] cursor-pointer border-r border-primary-purple checked:bg-primary-purple last:border-r-0 last:rounded-r-[7px] first:border-l-0 first:rounded-l-[7px] hover:bg-primary-purple hover:text-primary-white peer-has-[:checked]:bg-primary-purple peer-has-[:checked]:text-primary-white"
          >
            {option.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SortingTickets;
