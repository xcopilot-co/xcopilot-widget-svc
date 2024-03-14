import React from 'react';
import { Avatar } from './ui/avatar';
import { SocketContext } from '../contexts/socket-context';

const ChatHeader = ({
  name,
  logo,
}: // subHeader,
{
  name: string;
  logo: React.ReactNode;
  subHeader: string;
}) => {
  const { state } = React.useContext(SocketContext);
  return (
    <div className='frame_header'>
      <Avatar className='flex items-center justify-center bg-white dark:bg-white p-2'>
        {logo}
      </Avatar>
      <div className='flex gap-1 flex-col'>
        <p className='text-md font-medium leading-none'>{name}</p>
        <p className='text-xs font-medium leading-none flex -flex-row gap-2 items-center'>
          {/* status indicator */}

          {state.state === 'connected' ? (
            <svg
              className='w-2 h-2 ml-1 text-green-500'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <circle cx='10' cy='10' r='10' />
            </svg>
          ) : state.state === 'disconnected' ? (
            <svg
              className='w-2 h-2 ml-1 text-red-500'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <circle cx='10' cy='10' r='10' />
            </svg>
          ) : (
            <svg
              className='w-2 h-2 ml-1 text-yellow-500'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <circle cx='10' cy='10' r='10' />
            </svg>
          )}
          {
            {
              connected: 'Online',
              disconnected: 'Offline',
              retrying: 'Retrying',
              error: 'Error',
              stale: 'Stale',
            }[state.state]
          }
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
