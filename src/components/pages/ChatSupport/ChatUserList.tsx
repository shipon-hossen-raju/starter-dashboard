"use client";

import { RootState } from "@/redux";
import { setActiveChat, setSelectedFilter } from "@/redux/slice/chatSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function ChatUserList() {
  const dispatch = useDispatch();
  const { activeChat,messages, selectedFilter } = useSelector(
    (state: RootState) => state.chat
  );

  const filters = ["All", "Owner", "Service Provider"] as const;

  const handleFilterChange = (filter: (typeof filters)[number]) => {
    dispatch(setSelectedFilter(filter));
  };
  

  const handleChatSelect = (message: any) => {
    dispatch(
      setActiveChat({
        id: message.id,
        name: message.name,
        message: message.message,
        avatar: message.avatar,
      })
    );
  };

  return (
    <div className="">
      {/* filter tabs */}
      <div className="px-6">
        <div className="space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`py-2.5 px-4 text-sm font-medium border rounded-3xl ${
                selectedFilter === filter
                  ? "bg-primary text-white"
                  : "text-primary hover:text-textSecondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Chat List */}
      <div
        className="flex-1 w-full py-5 divide-y divide-dividerColor min-h-[calc(100vh-16rem)] max-h-[calc(100vh-16rem)] overflow-y-auto scroll-smooth"
      >
        {messages.map((message) => (
          <div
         key={message.id}
         onClick={() => handleChatSelect(message)}
         className={`flex items-center px-4 py-3 hover:bg-primary/10 cursor-pointer ${
           message.id === activeChat?.id ? "bg-primary/10" : ""
         }`}
          >
         <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
           {message.avatar ? (
             <Image
            src={message.avatar}
            alt={message.name}
            width={48}
            height={48}
            className="rounded-full"
             />
           ) : (
             message.name.charAt(0)
           )}
         </div>
         <div className="flex-1 min-w-0">
           <div className="flex items-center justify-between">
             <h3 className="text-sm font-medium text-gray-900 truncate">
            {message.name}
             </h3>
             <span className="text-xs text-gray-500">{message.time}</span>
           </div>
           <p className="text-sm text-gray-600 truncate mt-1">
             {message.message}
           </p>
         </div>
          </div>
        ))}
      </div>
    </div>
  );
}
