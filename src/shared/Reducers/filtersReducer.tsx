import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyName, Criterion, Transfers } from "../types";

function generateTransfers(): Transfers[] {
  return Array.from({ length: 4 }, (_, value) => ({
    value,
    label: `${value === 0 ? "Без" : value} пересад${
      value === 1 ? "ка" : value > 1 ? "ки" : "ок"
    }`,
    selected: false,
  }));
}

export interface FilterState {
  filter: {
    transfers: Transfers[];
    companyName: CompanyName;
    criterion: Criterion;
  };
}

const initialState: FilterState["filter"] = {
  transfers: generateTransfers(),
  companyName: { value: "all", selected: true },
  criterion: { value: "cheap" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTransfers: (
      state,
      action: PayloadAction<{ value: number; selected: boolean }>
    ) => {
      const { value, selected } = action.payload;
      const updatedTransfers = [...state.transfers];
      updatedTransfers[value] = { ...updatedTransfers[value], selected };
      return {
        ...state,
        transfers: updatedTransfers,
        companyName: {
          value: state.companyName.value,
          selected: state.companyName.selected,
        },
      };
    },

    setCompanyName: (state, action: PayloadAction<CompanyName>) => {
      const { value, selected } = action.payload;
      return {
        ...state,
        companyName: { value, selected },
      };
    },
    setSorting: (state, action: PayloadAction<Criterion>) => ({
      ...state,
      criterion: action.payload,
    }),
  },
});

export default filterSlice.reducer;
export const { setTransfers, setCompanyName, setSorting } = filterSlice.actions;
