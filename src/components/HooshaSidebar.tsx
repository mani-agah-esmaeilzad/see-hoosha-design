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
    title: "تحلیل‌های هوشمند",
    items: [
      { title: "تحلیل تکنیکال سهام", icon: TrendingUp, path: "/analysis/technical" },
      { title: "پیش‌بینی قیمت", icon: Brain, path: "/analysis/prediction" },
      { title: "تشخیص الگوی نمودار", icon: Search, path: "/analysis/pattern" },
    ],
  },
  {
    title: "اطلاعات بازار",
    items: [
      { title: "گزارش روزانه بورس", icon: FileText, path: "/market/daily" },
      { title: "تحلیل شاخص کل", icon: TrendingUp, path: "/market/index" },
      { title: "بهترین سهام امروز", icon: Bot, path: "/market/top-stocks" },
    ],
  },
  {
    title: "دستیار سرمایه‌گذاری",
    items: [
      { title: "مشاور پرتفوی", icon: User, path: "/advisor/portfolio" },
      { title: "محاسبه ریسک", icon: Calculator, path: "/advisor/risk" },
      { title: "استراتژی معاملاتی", icon: Brain, path: "/advisor/strategy" },
      { title: "آموزش بورس", icon: GraduationCap, path: "/advisor/education" },
      { title: "اخبار مالی", icon: FileText, path: "/advisor/news" },
    ],
  },
  {
    title: "ابزارهای تحلیل",
    items: [
      { title: "محاسبه سود و زیان", icon: Calculator, path: "/tools/pnl" },
      { title: "تحلیل بنیادی", icon: Search, path: "/tools/fundamental" },
      { title: "مقایسه سهام", icon: TrendingUp, path: "/tools/compare" },
      { title: "کندل استیک", icon: Bot, path: "/tools/candlestick" },
      { title: "حجم معاملات", icon: FileText, path: "/tools/volume" },
    ],
  },
];

export function HooshaSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "تحلیل‌های هوشمند": true,
    "اطلاعات بازار": false,
    "دستیار سرمایه‌گذاری": false,
    "ابزارهای تحلیل": false,
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