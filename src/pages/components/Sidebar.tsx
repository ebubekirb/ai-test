import * as React from 'react';
import { GalleryVerticalEnd, Pencil, Settings2, SquarePen } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { NavUser } from './nav-user';

const sidebarData = [
  {
    label: 'Today',
    items: ['Yapay zeka trendleri', 'React ile animasyon', 'Günlük motivasyon'],
  },
  {
    label: 'Yesterday',
    items: ['TypeScript avantajları', 'Evde kahve demleme', 'Kitap önerisi'],
  },
  {
    label: 'Last Week',
    items: [
      'Bilgisayar hızlandırma',
      'Araba tamiri',
      'Yazılımda refactoring',
      'Evde wifi güçlendirme',
      'Kısa tatil önerisi',
    ],
  },
  {
    label: 'Last Month',
    items: [
      'En iyi VSCode eklentileri',
      'Girişimcilik tüyoları',
      'Minimalist yaşam',
      'Daha iyi uyku için ipuçları',
      'Online eğitim kaynakları',
      'Evde spor programı',
      'Telefon pil ömrü uzatma',
      'Kahvaltı tarifleri',
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary dark:bg-white text-sidebar-primary-foreground'>
              <p className='text-lg dark:text-black font-bold'>O</p>
            </div>
            <div className='flex flex-col leading-none'>
              <span className='font-semibold text-sm'>OppenzaAI</span>
              <span className='text-xs'>v1.0.0</span>
            </div>
          </div>
          <button
            type='button'
            className='ml-2 hover:bg-muted rounded-md flex items-center justify-center w-8 h-8'
          >
            <Settings2 size={18} />
          </button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className='gap-4'>
            {sidebarData.map((section) => (
              <SidebarMenuItem key={section.label}>
                <SidebarMenuButton asChild>
                  <a href='#' className='font-medium text-xs'>
                    {section.label}
                  </a>
                </SidebarMenuButton>
                {section.items?.length ? (
                  <SidebarMenuSub className='ml-0 border-l-0 px-1.5'>
                    {section.items.map((item, idx) => (
                      <SidebarMenuSubItem key={item + idx}>
                        <SidebarMenuSubButton asChild>
                          <a href='#'>{item}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: 'ebubekir',
            email: 'ebu.bingologlu@gmail.com',
            avatar: '/avatars/shadcn.jpg',
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
