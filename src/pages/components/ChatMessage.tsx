interface ChatMessageProps {
  message: {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-start gap-2`}>
      <div className={`max-w-[70%] rounded-lg p-4 ${isUser ? 'bg-muted' : ''}`}>
        <p className='text-sm'>{message.content}</p>
        <span className='text-xs opacity-70 mt-1 block'>
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
