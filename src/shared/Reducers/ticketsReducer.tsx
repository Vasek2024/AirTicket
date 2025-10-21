import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Criterion, Ticket, Transfers } from "../types";
import generateTickets from "../MockData";

export interface TicketState {
  tickets: Ticket[];
  showMore: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}

export const fetchTickets = createAsyncThunk(
  "ticket/fetchTickets",
  async () => {
    const tickets = generateTickets();
    return tickets;
  }
);

const sortTickets = (criterion: Criterion) => {
  return (a: Ticket, b: Ticket) => {
    switch (criterion.value) {
      case "cheapest":
        return a.price - b.price;
      case "fastest":
        return a.duration - b.duration;
      case "optimal":
        // eslint-disable-next-line no-case-declarations
        const isOptimalTicketA = a.price <= 20000 && a.connectionAmount === 0;
        // eslint-disable-next-line no-case-declarations
        const isOptimalTicketB = b.price <= 20000 && b.connectionAmount === 0;
        return isOptimalTicketA
          ? -1
          : isOptimalTicketB
          ? 1
          : a.connectionAmount - b.connectionAmount;
      default:
        return 1;
    }
  };
};

export const filterTickets = (
  tickets: Ticket[],
  transfers: Transfers[],
  companyValue: string
) => {
  const selectedTransfers = transfers
    .filter((transfer) => transfer.selected)
    .map((transfer) => transfer.value);

  return tickets.filter(
    (ticket) =>
      (selectedTransfers.length === 0 ||
        selectedTransfers.includes(ticket.connectionAmount)) &&
      (companyValue === "all" || ticket.company === companyValue)
  );
};

const initialState: TicketState = {
  tickets: [],
  showMore: 3,
  status: "idle",
  error: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    showTickets(state, action) {
      const { criterion } = action.payload;
      state.tickets.sort(sortTickets(criterion));
      state.showMore = 3;
    },
    loadMore(state) {
      state.showMore += 3;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default ticketSlice.reducer;
export const { showTickets, loadMore } = ticketSlice.actions;
