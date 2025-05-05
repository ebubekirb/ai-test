import { Plus, Search, Lightbulb, Megaphone, Mic, Send, SendHorizonal } from 'lucide-react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
}

const actions = [
  { icon: <Search size={16} className='text-muted-foreground' />, label: 'Search' },
  { icon: <Lightbulb size={16} className='text-muted-foreground' />, label: 'Reason' },
  { icon: <Megaphone size={16} className='text-muted-foreground' />, label: 'Deep research' },
];

const ChatInput = ({ message, setMessage, onSendMessage }: ChatInputProps) => {
  return (
    <>
      <div className='w-full flex flex-col shadow-sm bg-muted rounded-xl mb-2 gap-2 items-center'>
        <form
          onSubmit={onSendMessage}
          className='w-full flex items-center gap-1 px-4 py-3 focus-within:ring-primary'
          style={{ minHeight: 44 }}
        >
          {/* Input */}
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Ask anything'
            className='flex-1 bg-transparent outline-none border-none text-base px-2'
          />
        </form>
        {/* Action Buttons */}
        <div className='flex items-center gap-2 mb-3 w-full px-5'>
          {/* Plus Button */}
          <button
            type='button'
            className='flex items-center justify-center w-8 h-8 rounded-full border border-muted-foreground/40 hover:bg-muted transition'
            tabIndex={-1}
          >
            <Plus size={18} className='text-muted-foreground' />
          </button>
          <div className='flex gap-2 flex-1 justify-center'>
            {actions.map((action) => (
              <button
                key={action.label || 'more'}
                type='button'
                className='flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border bg-muted text-foreground text-xs hover:bg-muted transition'
              >
                {action.icon}
                {action.label && <span className='text-muted-foreground'>{action.label}</span>}
              </button>
            ))}
          </div>
          {/* Send Button */}
          <button
            type='submit'
            disabled={!message.trim()}
            className='flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-white text-white shadow'
          >
            <SendHorizonal size={18} className='text-white dark:text-black' />
          </button>
        </div>
      </div>
      <p className='text-xs text-center mb-3 text-muted-foreground'>
        By messaging <span className='text-black dark:text-white'>Oppenza</span>, you agree to our{' '}
        <span className='text-black dark:text-white'>Terms</span> and{' '}
        <span className='text-black dark:text-white'>Privacy Policy</span>.
      </p>
    </>
  );
};

export default ChatInput;
