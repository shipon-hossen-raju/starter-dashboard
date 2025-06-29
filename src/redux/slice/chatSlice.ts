import { ActiveChat, ChatMessage, ChatState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: ChatState = {
  messages: [
    {
      id: "1",
      name: "Devon Lane",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-avater.png",
    },
    {
      id: "2",
      name: "Devon",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-avater.png",
    },
    {
      id: "3",
      name: "Lane",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-image.jpg",
    },
    {
      id: "4",
      name: "Devon Lane 1",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-avater.png",
    },
    {
      id: "5",
      name: "Devon Lane 2",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-image.jpg",
    },
    {
      id: "6",
      name: "Devon Lane 3",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-avater.png",
    },
    {
      id: "7",
      name: "Devon Lane 4",
      message: "Hey Dr. Ali, can I pleas...",
      time: "10:30am",
      avatar: "/user-image.jpg",
      },
      {
        id: "8",
        name: "Devon Lane 5",
        message: "Hey Dr. Ali, can I pleas...",
        time: "10:30am",
        avatar: "/user-avater.png",
      },
      {
        id: "9",
        name: "Devon Lane 6",
        message: "Hey Dr. Ali, can I pleas...",
        time: "10:30am",
        avatar: "/user-image.jpg",
      },
      {
        id: "10",
        name: "Devon Lane 7",
        message: "Hey Dr. Ali, can I pleas...",
        time: "10:30am",
        avatar: "/user-avater.png",
      },
  ],
  activeChat: {
    id: "1",
    name: "Devon Lane",
    message: "Hey Dr. Ali, can I pleas...",
    avatar: "/user-avater.png",
  },
  selectedFilter: "All",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<ActiveChat>) => {
      state.activeChat = action.payload;
    },
    setSelectedFilter: (
      state,
      action: PayloadAction<"All" | "Owner" | "Service Provider">
    ) => {
      state.selectedFilter = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setActiveChat, setSelectedFilter, addMessage } =
  chatSlice.actions;
export default chatSlice.reducer;
