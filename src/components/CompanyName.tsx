import { useDispatch, useSelector } from "react-redux";
import { FilterState, setCompanyName } from "../shared/Reducers/filtersReducer";

const CompanyName = () => {
  const companyName = useSelector(
    (state: FilterState) => state.filter.companyName
  );
  const dispatch = useDispatch();

  const companyNamesData = [
    { id: "all", value: "all", label: "Все компании" },
    { id: "pobeda", value: "pobeda", label: "Победа" },
    { id: "redWings", value: "redWings", label: "Red Wings" },
    { id: "S7", value: "S7", label: "S7 Airlines" },
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompanyName({ value: e.target.value, selected: true }));
  };

  return (
    <div className="wrapper bg-primary-gray rounded-[10px] p-4 max-screen-tablet:bg-transparent max-screen-mobile:p-0">
      <div className="company">
        <p className="title text-primary-purple font-bold text-xl max-screen-tablet:text-primary-white max-screen-mobile:text-[16px]">
          Компании
        </p>
        <div className="radio flex flex-col gap-[20px] p-4">
          {companyNamesData.map(({ id, value, label }) => (
            <div key={id} className="item text-secondary-lavender">
              <label
                className="label flex gap-[15px] items-center text-base max-screen-tablet:text-primary-white max-screen-mobile:text-[14px] max-screen-mobile:ml-0"
                htmlFor={id}
              >
                <input
                  className="circle flex justify-center items-center w-[21px] h-[21px] border-[1px] rounded-[100%] border-primary-purple cursor-pointer appearance-none checked:before:content-[''] checked:before:block checked:before:w-[15px] checked:before:h-[15px] checked:before:bg-primary-purple checked:before:cursor-pointer checked:before:rounded-[50%] max-screen-tablet:border-primary-white max-screen-tablet:checked:before:bg-primary-white"
                  name="company"
                  type="radio"
                  value={value}
                  checked={companyName.value === value}
                  onChange={handleRadioChange}
                  id={id}
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

export default CompanyName;
