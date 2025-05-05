import { ThemeProvider } from './components/theme-provider';
import { SidebarProvider } from './components/ui/sidebar';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <SidebarProvider>
        <ChatPage />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
