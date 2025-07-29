import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HooshaSidebar } from "@/components/HooshaSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TutorialDialog } from "@/components/TutorialDialog";
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background">
        {/* Sidebar */}
        <HooshaSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-14 bg-background/95 backdrop-blur-sm border-b border-border flex-shrink-0">
            <div className="flex items-center justify-between h-full px-4">
              {/* Right side - Logo */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="text-xl font-bold text-primary">بورس هوشمند</div>
                  <div className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                    SMART EXCHANGE
                  </div>
                </div>
              </div>
              
              {/* Left side - Tutorial, User menu & Theme */}
              <div className="flex items-center gap-2">
                <TutorialDialog />
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <User className="h-4 w-4" />
                </Button>
                {/* Sidebar Toggle for Desktop */}
                <SidebarTrigger className="h-9 w-9">
                  <Menu className="h-4 w-4" />
                </SidebarTrigger>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 overflow-hidden">
            <ChatInterface />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
