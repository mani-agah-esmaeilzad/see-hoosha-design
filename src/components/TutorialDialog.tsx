import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle, TrendingUp, Brain, Calculator, FileText } from "lucide-react";

export function TutorialDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-right">آموزش استفاده از دستیار هوشمند بورس</DialogTitle>
          <DialogDescription className="text-right">
            راهنمای کامل استفاده از قابلیت‌های دستیار هوشمند بورس ایران
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-right">
          {/* بخش اول */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">تحلیل تکنیکال سهام</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• نام سهم یا نماد آن را وارد کنید (مثال: "تحلیل پتروشیمی")</p>
              <p>• از الگوهای کندل استیک بپرسید (مثال: "الگوی چکش در نمودار پارس")</p>
              <p>• درباره شاخص‌های تکنیکال سوال کنید (RSI، MACD، میانگین متحرک)</p>
            </div>
          </div>

          {/* بخش دوم */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">پیش‌بینی قیمت و تحلیل</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• "پیش‌بینی قیمت [نام سهم] برای هفته آینده"</p>
              <p>• "آیا الان زمان خرید [نام سهم] است?"</p>
              <p>• "تحلیل بنیادی شرکت [نام شرکت]"</p>
            </div>
          </div>

          {/* بخش سوم */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">محاسبات مالی</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• محاسبه سود و زیان: "اگر 1000 سهم پتروشیمی با قیمت 5000 تومان بخرم..."</p>
              <p>• محاسبه ریسک پرتفوی: "ریسک پرتفوی من با 30% بانکی، 40% پتروشیمی"</p>
              <p>• "چه درصد از پولم رو روی [نام سهم] بذارم؟"</p>
            </div>
          </div>

          {/* بخش چهارم */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">اخبار و گزارشات</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• "آخرین اخبار شرکت [نام شرکت]"</p>
              <p>• "گزارش امروز شاخص کل"</p>
              <p>• "تأثیر تحریم‌ها روی بازار سرمایه"</p>
            </div>
          </div>

          {/* نکات مهم */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-primary">نکات مهم:</h3>
            <div className="space-y-1 text-sm">
              <p>• همیشه نام دقیق سهم یا نماد بورسی را ذکر کنید</p>
              <p>• برای تحلیل بهتر، بازه زمانی مورد نظر را مشخص کنید</p>
              <p>• توصیه‌های ارائه شده صرفاً جنبه آموزشی دارد</p>
              <p>• قبل از هر سرمایه‌گذاری با مشاور مالی مشورت کنید</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}