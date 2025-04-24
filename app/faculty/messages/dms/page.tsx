// components/ChatContent.js
import { DialogContent, DialogClose, DialogTitle } from "@radix-ui/react-dialog";

const ChatContent = () => {
  return (
    <DialogContent className="max-w-md w-full p-5 bg-white shadow-lg rounded-lg">
 
        <DialogTitle className="text-lg font-semibold">Chat</DialogTitle>
        <DialogClose asChild>
          <button className="text-gray-500">X</button>
        </DialogClose>
     
      {/* Chat Messages */}
      <div className="space-y-3">
        <div className="bg-gray-100 p-2 rounded-lg">Hello, how can I help?</div>
        <div className="bg-gray-100 p-2 rounded-lg">I have a question about your service.</div>
      </div>

      {/* Chat Input */}
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <button className="p-2 bg-blue-500 text-white rounded-lg">Send</button>
      </div>
    </DialogContent>
  );
};

export default ChatContent;
