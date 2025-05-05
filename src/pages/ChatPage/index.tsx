import { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { AppSidebar } from '../components/Sidebar';
import { SidebarInset } from '@/components/ui/sidebar';

import { ScrollArea } from '@/components/ui/scroll-area';
import Header from '@/components/header';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'user',
    content: 'JavaScript nedir?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    role: 'assistant',
    content:
      'JavaScript, web sayfalarını dinamik hale getirmek için kullanılan, tarayıcıda çalışan bir programlama dilidir.',
    timestamp: new Date().toISOString(),
  },
  {
    id: '3',
    role: 'user',
    content: 'JavaScript ile değişken nasıl tanımlanır?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '4',
    role: 'assistant',
    content:
      "JavaScript'te değişken tanımlamak için var, let veya const anahtar kelimeleri kullanılır. Örneğin: let x = 5;",
    timestamp: new Date().toISOString(),
  },
  {
    id: '5',
    role: 'user',
    content: 'let ve const arasındaki fark nedir?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '6',
    role: 'assistant',
    content:
      'let ile tanımlanan değişkenler yeniden atanabilir, const ile tanımlananlar ise sabittir ve tekrar atanamaz.',
    timestamp: new Date().toISOString(),
  },
  {
    id: '7',
    role: 'user',
    content: 'Bir fonksiyon nasıl tanımlanır?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '8',
    role: 'assistant',
    content:
      "Fonksiyon tanımlamak için function anahtar kelimesi veya ok fonksiyonu (arrow function) kullanılır. Örnek: function selam() { console.log('Merhaba'); }",
    timestamp: new Date().toISOString(),
  },
  {
    id: '9',
    role: 'user',
    content: 'JavaScript ile bir dizi nasıl oluşturulur?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '10',
    role: 'assistant',
    content: 'Bir dizi köşeli parantezlerle tanımlanır: const dizi = [1, 2, 3, 4];',
    timestamp: new Date().toISOString(),
  },
  {
    id: '11',
    role: 'user',
    content: 'Dizinin uzunluğunu nasıl öğrenirim?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '12',
    role: 'assistant',
    content: 'Bir dizinin uzunluğunu .length özelliği ile öğrenebilirsin: dizi.length',
    timestamp: new Date().toISOString(),
  },
  {
    id: '13',
    role: 'user',
    content: 'Bir döngü ile dizideki elemanları nasıl gezebilirim?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '14',
    role: 'assistant',
    content:
      'for, forEach veya map gibi döngülerle dizideki elemanları gezebilirsin. Örnek: dizi.forEach(function(e) { console.log(e); });',
    timestamp: new Date().toISOString(),
  },
  {
    id: '15',
    role: 'user',
    content: 'JavaScript ile bir nesne nasıl tanımlanır?',
    timestamp: new Date().toISOString(),
  },
  {
    id: '16',
    role: 'assistant',
    content: 'Nesne süslü parantezlerle tanımlanır: const kisi = { ad: \"Ali\", yas: 25 };',
    timestamp: new Date().toISOString(),
  },
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setMessage('');
    // Simulate assistant reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Bunu bir backend ile entegre edebilirsin!',
          timestamp: new Date().toISOString(),
        },
      ]);
    }, 800);
  };

  return (
    <div className='flex h-screen w-screen bg-background text-foreground'>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className='flex flex-col flex-1 h-full'>
          <div className='flex-1 flex flex-col items-center justify-end'>
            <div className='w-full max-w-4xl flex flex-col flex-1'>
              <ScrollArea className='flex-1 h-[60vh] min-h-[300px] max-h-[75vh] p-4 space-y-4'>
                <div className='flex flex-col gap-4'>
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className='px-4 w-full max-w-4xl bg-background sticky'>
              <ChatInput
                message={message}
                setMessage={setMessage}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
  );
};

export default ChatPage;
