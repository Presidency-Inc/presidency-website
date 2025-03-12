
import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  const openChat = () => {
    console.log("Chat functionality would open here");
    // This is a placeholder for actual chat functionality
  };

  return (
    <button
      onClick={openChat}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-[#1a46e5] text-white shadow-lg hover:bg-[#1a46e5]/90 transition-all"
      aria-label="Open chat"
    >
      <MessageCircle size={32} />
    </button>
  );
};

export default ChatButton;
