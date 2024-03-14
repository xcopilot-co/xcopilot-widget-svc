import Markdown from './markdown';
import { cn } from '../utils';
import { Icons } from './ui/icons';

const ChatBubble = ({ key, message }: any) => {
  return (
    <div className='flex flex-row gap-3 items-end chatbubble_animation'>
      {message.type !== 'human' && (
        <div className='mb-1'>
          <Icons.logoLoading className='w-6 h-6' />
        </div>
      )}
      <div
        key={key}
        className={cn(
          'flex  max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm text-wrap break-words ml-0',
          message.type === 'human'
            ? 'ml-auto bg-primary text-primary-foreground'
            : 'bg-muted'
        )}
      >
        <Markdown content={message?.data?.content} />
      </div>
    </div>
  );
};

export default ChatBubble;
