
import { DialogTrigger } from "@radix-ui/react-dialog";

const ChatTrigger = ({ setIsOpen }) => {
  return (
    <DialogTrigger asChild>
      <button
        className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full"
        onClick={() => setIsOpen(true)}
      >
        Chat
      </button>
    </DialogTrigger>
  );
};

export default ChatTrigger;
