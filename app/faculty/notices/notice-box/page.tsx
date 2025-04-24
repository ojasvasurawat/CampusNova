import { Plus } from "lucide-react";


export default function NoticeBox() {

  return (
    <div className= "bg-black text-white flex items-center justify-center gap-2 rounded-2xl p-3 cursor-pointer transition-all duration-200 hover:bg-white hover:text-black border border-2 border-transparent hover:border-black">
      <Plus className="w-5 h-5" />
      <span className="text-base font-medium">Add Notice</span>
    </div>
  );
}
