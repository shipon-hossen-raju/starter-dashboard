import { Card } from "@/components/ui/Card";
import ChatUserList from "./ChatUserList";
import { ChatWindow } from "./ChatWindow";

export default function ChatSupport() {
  return (
    <div className="flex space-x-6 h-full">
      <div className="w-[22rem]">
        <Card className="!px-0">
          <div>
            <h2 className="mb-6 px-6">Support Center</h2>

            <ChatUserList />
          </div>
        </Card>
      </div>
      <div className="flex-1 ">
        <ChatWindow />
      </div>
    </div>
  );
}
