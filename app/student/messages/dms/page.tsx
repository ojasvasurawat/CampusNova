// components/ChatOverlay.js
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ChatMessage = ({ isUser, message }) => {
  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      )}

      <div
        className={`max-w-xs p-2 rounded-md ${
          isUser ? 'bg-blue-100 text-right' : 'bg-gray-100'
        }`}
      >
        {message}
      </div>

      {isUser && (
        <Avatar>
          <AvatarImage src="https://github.com/unovue.png" alt="You" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

const ChatOverlay = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent side="right" className="w-[350px] sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle>Chat</SheetTitle>
        </SheetHeader>

        {/* Chat Message Area */}
        <div className="flex-1 mt-4 space-y-3 overflow-y-auto pr-2">
          <ChatMessage isUser={false} message="Hi there! I have doubts regarding assignment" />
          <ChatMessage isUser={true} message="Sure. What's up?" />
          <ChatMessage isUser={false} message="Regarding the assignment submission date." />
        </div>

        {/* Chat Input */}
        <SheetFooter className="pt-4">
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded px-3 py-2"
            />
            <Button>Send</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ChatOverlay;
