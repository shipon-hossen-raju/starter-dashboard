"use client";

import { Card } from "@/components/ui/Card";
import ChatUserList from "./ChatUserList";
import { ChatWindow } from "./ChatWindow";
import { useState } from "react";
import MobileChat from "./MobileChat";

export default function ChatSupport() {
  const [activeChat, setActiveChat] = useState(true);
  
  return (
    <>
      <div className="hidden md:flex md:flex-row md:space-x-6 h-full ">
        <div className="w-full md:w-[22rem] mb-4 md:mb-0">
          <Card className="!px-0">
            <div>
              <h2 className="mb-6 px-6">Support Center</h2>
              <ChatUserList />
            </div>
          </Card>
        </div>
        <div className="flex-1 w-full">
          <ChatWindow />
        </div>
      </div>
      <div className="md:hidden">
        {activeChat ? (
          <Card className="!px-0">
            <div onClick={() => setActiveChat(false)}>
              <h2 className="mb-6 px-6">Support Center</h2>
              <ChatUserList />
            </div>
          </Card>
        ) : (
          <MobileChat onClose={() => setActiveChat(true)} />
        )}
      </div>
    </>
  );
}
