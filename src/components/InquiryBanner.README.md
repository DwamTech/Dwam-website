# InquiryBanner Component

## الوصف
بانر احترافي للطلب والاستفسار مع تصميم عصري وتأثيرات حركية جذابة. يستخدم كفاصل بين الأقسام المختلفة في الموقع.

## المميزات
- ✨ تصميم احترافي مع تأثيرات Glassmorphism
- 🎨 خلفية متحركة مع دوائر متحركة
- 📱 تصميم متجاوب بالكامل (Responsive)
- 🔄 أيقونة متحركة مع تأثير Pulse
- 💫 أزرار CTA مع تأثيرات Hover جذابة
- 🎭 انيميشن سلس ومميز

## كيفية الاستخدام

### 1. استيراد المكون
```tsx
import InquiryBanner from "@/components/InquiryBanner";
```

### 2. إضافته في أي صفحة
```tsx
export default function YourPage() {
  return (
    <div>
      <YourSection1 />
      <InquiryBanner />  {/* كفاصل بين الأقسام */}
      <YourSection2 />
      <InquiryBanner />  {/* يمكن استخدامه أكثر من مرة */}
      <YourSection3 />
    </div>
  );
}
```

## التخصيص

### تغيير رقم الواتساب أو الهاتف
افتح الملف `InquiryBanner.tsx` وعدل الروابط:

```tsx
// رابط الواتساب
<a href="https://wa.me/201555855857" ...>

// رقم الهاتف
<a href="tel:+201555855857" ...>
```

### تعديل النصوص
عدل النصوص في الملف نفسه:

```tsx
<h3 className={styles.title}>
  هل لديك <span className={styles.highlight}>استفسار</span> أو طلب؟
</h3>
<p className={styles.subtitle}>
  نحن هنا للإجابة على كافة تساؤلاتك...
</p>
```

### تغيير الألوان
افتح الملف `InquiryBanner.module.css` وعدل المتغيرات:

```css
/* الألوان الرئيسية */
#ff8400 - البرتقالي الأساسي
#25d366 - أخضر الواتساب
#0a0a1e - خلفية داكنة
```

## الملفات

📁 **Component Files:**
- `InquiryBanner.tsx` - ملف المكون الرئيسي
- `InquiryBanner.module.css` - ملف التنسيقات المنفصل

## مثال تطبيقي

تم إضافة البانر في الصفحة الرئيسية (`src/app/page.tsx`) كمثال:
- بعد قسم AI
- بعد قسم EdTech
- بعد قسم DwamProducts

يمكنك إضافته في أي مكان تريده!

## التوافقية
- ✅ Next.js 14+
- ✅ React 18+
- ✅ TypeScript
- ✅ CSS Modules

## الاعتماديات
- Font Awesome (للأيقونات)
- AOS Library (للأنيميشن - اختياري)

---

تم التطوير بواسطة فريق DWAM 🚀
