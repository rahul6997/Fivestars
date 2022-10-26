import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  timeslots: {
    "10-11 am": true,
    "11-12 am": true,
    "2-3 pm": true,
    "3-4 pm": true,
  },
  isAuthorized: false,
};

const timeSlotSlice = createSlice({
    name: 'timeslots',
    initialState,
    reducers: {
        bookalot(state, action) {
            state.timeslots[action.timeslot] = !state.timeslots[action.timeslot];
        },
    }
});

const store = configureStore({
  reducer: timeSlotSlice.reducer
});


export const timeSlotActions = timeSlotSlice.actions;

export default store;
