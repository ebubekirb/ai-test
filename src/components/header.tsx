import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SidebarTrigger } from './ui/sidebar';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

function Header() {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 border-b'>
      <div className='flex items-center justify-between w-full gap-2 px-3'>
        <SidebarTrigger />
        <div className='flex-1 flex justify-center items-center'>
          <Select defaultValue='oppenzaai'>
            <SelectTrigger className='w-30 !h-8 border border-border text-sm focus:outline-none'>
              <SelectValue className='text-sm' placeholder='OppenzaAI' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className='text-sm' value='oppenzaai'>
                OppenzaAI
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex items-center gap-4'>
          <ModeToggle />
          <div className='flex items-center gap-2'>
            <Button
              size='sm'
              className='h-8 px-4 text-white hover:bg-black/80 dark:hover:bg-white/80 hover:text-white dark:bg-white bg-black dark:text-black'
              variant='outline'
            >
              Sign Up
            </Button>
            <Button
              size='sm'
              className='h-8 px-4 bg-white border border-zinc-300'
              variant='outline'
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
