import {
  Bot,
  Brain,
  Camera,
  ChefHat,
  Code,
  CreditCard,
  Dumbbell,
  FileText,
  GraduationCap,
  Lightbulb,
  MapPin,
  MessageSquare,
  Music,
  Plane,
  Search,
  Share2,
  Stethoscope,
  TrendingUp,
  User,
  Utensils,
  Calculator,
  ChevronDown,
  ChevronLeft,
  Plus,
  Settings,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "مدل ها - AI",
    items: [
      { title: "هوش مصنوعی پیشرفته", icon: Brain, path: "/models/master-mind" },
      { title: "ChatGPT 4.1", icon: Bot, path: "/models/chatgpt-4o" },
      { title: "جستجوی وب هوشمند", icon: Search, path: "/models/perplexity" },
    ],
  },
  {
    title: "تولید محتوا و عکس",
    items: [
      { title: "تولید عکس", icon: Camera, path: "/image/generate" },
      { title: "دستیار سوشال مدیا", icon: Share2, path: "/content/social-analyst" },
      { title: "مقاله و سئو سایت", icon: FileText, path: "/content/essay" },
    ],
  },
  {
    title: "دستیار ها",
    items: [
      { title: "مترجم", icon: MessageSquare, path: "/assistants/translator" },
      { title: "مشاور مسافرتی", icon: Plane, path: "/assistants/travel-agent" },
      { title: "آشپز", icon: ChefHat, path: "/assistants/cooking" },
      { title: "کارشناس تکنولوژی", icon: Bot, path: "/assistants/tech-expert" },
      { title: "پزشک", icon: Stethoscope, path: "/assistants/doctor" },
      { title: "معلم", icon: GraduationCap, path: "/assistants/teacher" },
      { title: "مربی باشگاه", icon: Dumbbell, path: "/assistants/fitness-coach" },
      { title: "کارشناس کد‌نویسی", icon: Code, path: "/assistants/code-expert" },
    ],
  },
  {
    title: "ابزار ها",
    items: [
      { title: "ایده های بیزنس", icon: Lightbulb, path: "/tools/business-ideas" },
      { title: "تحلیل بازار فارکس و کریپتو", icon: TrendingUp, path: "/tools/trading" },
      { title: "دراپشیپینگ", icon: CreditCard, path: "/tools/drop-shipping" },
      { title: "حل ریاضیات", icon: Calculator, path: "/tools/math" },
      { title: "برنامه غذایی و رژیم", icon: Utensils, path: "/tools/healthy-diet" },
      { title: "تولید موسیقی", icon: Music, path: "/tools/generate-music" },
    ],
  },
];

export function HooshaSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "مدل ها - AI": true,
    "تولید محتوا و عکس": false,
    "دستیار ها": false,
    "ابزار ها": false,
  });

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupTitle]: !prev[groupTitle]
    }));
  };

  return (
    <Sidebar className={cn("border-l-0 bg-sidebar", collapsed ? "w-16" : "w-80")}>
      <SidebarContent className="p-4">
        {/* New Chat Button */}
        <div className="mb-6">
          <Button 
            className={cn(
              "bg-primary text-primary-foreground hover:bg-primary/90",
              collapsed ? "h-10 w-10 p-0" : "w-full justify-start gap-3"
            )}
          >
            <Plus className="h-4 w-4" />
            {!collapsed && "گفتگوی جدید"}
          </Button>
        </div>

        {/* Chat History */}
        <div className="mb-6">
          {!collapsed && (
            <div className="text-sm text-muted-foreground mb-3">تاریخچه</div>
          )}
          <div className="text-sm text-muted-foreground text-center py-4">
            {collapsed ? "خالی" : "خالی است."}
          </div>
        </div>

        {/* Menu Groups */}
        <div className="space-y-2">
          {menuItems.map((group) => (
            <SidebarGroup key={group.title}>
              <Collapsible 
                open={openGroups[group.title]} 
                onOpenChange={() => toggleGroup(group.title)}
              >
                <CollapsibleTrigger asChild>
                  <SidebarGroupLabel className="group/label text-sm font-medium hover:bg-sidebar-hover rounded-lg p-2 cursor-pointer transition-colors flex items-center justify-between">
                    <span className={collapsed ? "sr-only" : ""}>{group.title}</span>
                    {!collapsed && (
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        openGroups[group.title] && "rotate-180"
                      )} />
                    )}
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            className={cn(
                              "hover:bg-sidebar-hover",
                              collapsed ? "h-10 w-10 p-0 justify-center" : "w-full justify-start gap-3"
                            )}
                          >
                            <item.icon className="h-4 w-4" />
                            {!collapsed && <span>{item.title}</span>}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          ))}
        </div>

        {/* Bottom Menu */}
        <div className="mt-auto pt-6 border-t border-border">
          <div className="space-y-2">
            <SidebarMenuButton 
              className={cn(
                "hover:bg-sidebar-hover",
                collapsed ? "h-10 w-10 p-0 justify-center" : "w-full justify-start gap-3"
              )}
            >
              <Settings className="h-4 w-4" />
              {!collapsed && "تنظیمات"}
            </SidebarMenuButton>
            
            <SidebarMenuButton 
              className={cn(
                "hover:bg-sidebar-hover",
                collapsed ? "h-10 w-10 p-0 justify-center" : "w-full justify-start gap-3"
              )}
            >
              <BookOpen className="h-4 w-4" />
              {!collapsed && "آموزش و مقالات"}
            </SidebarMenuButton>
            
            <SidebarMenuButton 
              className={cn(
                "hover:bg-sidebar-hover",
                collapsed ? "h-10 w-10 p-0 justify-center" : "w-full justify-start gap-3"
              )}
            >
              <MessageCircle className="h-4 w-4" />
              {!collapsed && "پشتیبانی تلگرام"}
            </SidebarMenuButton>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}