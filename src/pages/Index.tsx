import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HooshaSidebar } from "@/components/HooshaSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50 h-14 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center justify-between h-full px-4">
            {/* Right side - Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold text-primary">هوشا</div>
                <div className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                  HOOSHA
                </div>
              </div>
            </div>
            
            {/* Left side - User menu & Theme */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <User className="h-4 w-4" />
              </Button>
              <SidebarTrigger className="lg:hidden">
                <Menu className="h-4 w-4" />
              </SidebarTrigger>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-14">
          <ChatInterface />
        </main>

        {/* Sidebar */}
        <HooshaSidebar />
      </div>
    </SidebarProvider>
  );
};

export default Index;
