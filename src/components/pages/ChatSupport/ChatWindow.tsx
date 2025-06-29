"use client";
import { messageSendIcon } from "@/asserts/icons";
import { Card } from "@/components/ui/Card";
import { RootState } from "@/redux";
import { Send } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const ChatWindow: React.FC = () => {
  const { activeChat } = useSelector((state: RootState) => state.chat);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle send message logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No chat selected
          </h3>
          <p className="text-gray-500">
            Choose a conversation to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <div className="flex-1 flex flex-col min-h-[calc(100vh-10rem)] max-h-[calc(100vh-10rem)] overflow-y-auto scroll-smooth">
        {/* Chat Header */}
        <div className="bg-white pb-5 ">
          <div className="flex items-center">
            <div className="bg-primary size-10 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
              {activeChat.avatar ? (
                <Image
                  src={activeChat.avatar}
                  alt={activeChat.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              ) : (
                activeChat.name.charAt(0)
              )}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {activeChat.name}
              </h3>
              <p className="text-xs text-gray-500">{activeChat.message}</p>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 bg-primary/10 rounded-3xl overflow-y-auto scroll-smooth">
          <div className="space-y-4">
            {/* Sample messages */}
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">
                {activeChat.avatar ? (
                  <Image
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  activeChat.name.charAt(0)
                )}
              </div>

              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-900">
                    Hey Dr. Ali, can I please get some help with my property
                    management issue?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30am</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-primary rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-white">
                    Of course! I'd be happy to help. What specific issue are you
                    facing?
                  </p>
                  <span className="text-xs text-white/60 mt-1.5">10:32am</span>
                </div>
              </div>
            </div>
            {/* Sample messages */}
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">
                {activeChat.avatar ? (
                  <Image
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  activeChat.name.charAt(0)
                )}
              </div>

              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-900">
                    Hey Dr. Ali, can I please get some help with my property
                    management issue?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30am</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-primary rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-white">
                    Of course! I'd be happy to help. What specific issue are you
                    facing?
                  </p>
                  <span className="text-xs text-white/60 mt-1.5">10:32am</span>
                </div>
              </div>
            </div>
            {/* Sample messages */}
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">
                {activeChat.avatar ? (
                  <Image
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  activeChat.name.charAt(0)
                )}
              </div>

              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-900">
                    Hey Dr. Ali, can I please get some help with my property
                    management issue?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30am</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-primary rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-white">
                    Of course! I'd be happy to help. What specific issue are you
                    facing?
                  </p>
                  <span className="text-xs text-white/60 mt-1.5">10:32am</span>
                </div>
              </div>
            </div>
            {/* Sample messages */}
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">
                {activeChat.avatar ? (
                  <Image
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  activeChat.name.charAt(0)
                )}
              </div>

              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-900">
                    Hey Dr. Ali, can I please get some help with my property
                    management issue?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30am</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-primary rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-white">
                    Of course! I'd be happy to help. What specific issue are you
                    facing?
                  </p>
                  <span className="text-xs text-white/60 mt-1.5">10:32am</span>
                </div>
              </div>
            </div>
            {/* Sample messages */}
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">
                {activeChat.avatar ? (
                  <Image
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  activeChat.name.charAt(0)
                )}
              </div>

              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-900">
                    Hey Dr. Ali, can I please get some help with my property
                    management issue?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30am</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-primary rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-white">
                    Of course! I'd be happy to help. What specific issue are you
                    facing?
                  </p>
                  <span className="text-xs text-white/60 mt-1.5">10:32am</span>
                </div>
              </div>
            </div>
            {/* Sample messages */}
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">
                {activeChat.avatar ? (
                  <Image
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  activeChat.name.charAt(0)
                )}
              </div>

              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-900">
                    Hey Dr. Ali, can I please get some help with my property
                    management issue?
                  </p>
                  <span className="text-xs text-gray-500 mt-1">10:30am</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end">
              <div className="flex-1 max-w-md">
                <div className="bg-primary rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-white">
                    Of course! I'd be happy to help. What specific issue are you
                    facing?
                  </p>
                  <span className="text-xs text-white/60 mt-1.5">10:32am</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white p-4">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center space-x-3"
          >
            <div className="flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
            >
              {messageSendIcon}
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};
