"use client";

import { leftArrowIcon } from "@/asserts/icons";
import { ChatWindow } from "./ChatWindow";

export default function MobileChat({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 w-full relative z-[10]">
      <button className="absolute top-5 right-5 rounded-full bg-primary/10 p-2 size-10 flex-center" onClick={onClose}> {leftArrowIcon} </button>
      <ChatWindow />
    </div>
  );
}
