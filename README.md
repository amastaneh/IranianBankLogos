# Iranian Bank Logos
[![Gitter][gitter-badge]][gitter]
[![Codacy][codacy-badge]][codacy]
[![Releases][releases-badge]][releases]
[![Download][download-badge]][download]
![Vulnerabilities][synk]





&#x202b;این کتابخانه شامل فهرست کاملی از لوگو یا نمایه های بانک های ایران است که (تا لحظه انتشار این نسخه) بر روی سایت بانک مرکزی ایران منتشر شده است. 
&#x202b;لطفا در صورت مشاهده مغایرت در رنگ، شکل، فرم یا محتوای لوگوها همین جا یا از سایت طراحی وب ایران ما را مطلع فرمایید.

🌟 If you ❤️ library, please star it! 🌟

# نحوه استفاده

### 1. دریافت فایل

&#x202b;ساده ترین روش، استفاده از [npm](https://www.npmjs.com/package/iranianbanklogos) است

```sh
npm install iranianbanklogos
```

```sh
yarn add iranianbanklogos
```

&#x202b;راه دیگر، استفاده از [Nuget](https://www.nuget.org/packages/IranianBankLogos) است

```sh
Install-Package IranianBankLogos
```

&#x202b;البته می توانید از [Bower](http://bower.io/) هم استفاده کنید

```sh
bower install iranianbanklogos
```

&#x202b;در غیر این صورت شما می توانید از مسیر `dist/ibl.min.css` فایل استایل را دانلود و در پروژه خود استفاده کنید.

### 2. لینک به استایل

&#x202b;با افزودن لینک این استایل به پروژه یا HTML کار تمام است.

&#x202b;در پروژه های مبتنی بر `React` می توانید خط زیر را اضافه کنید:

```javascript
import "iranianbanklogos/dist/ibl.css";
```

&#x202b;یا در پروژه های دات نت و مانند آن می توان لینک را در قسمت `<head>` قرار داد:

```html
<link rel="stylesheet" href="bower_components/iranianbanklogos/dist/ibl.min.css">
```

### 3. نمونه کد

&#x202b;با مراجعه به [سایت پروژه](https://webdesigniran.github.io/IranianBankLogos/) می توانید بر روی هر لوگو کلیک کنید تا کد `HTML` مربوطه در کلیپ.بورد. کپی شود. 

&#x202b;سپس می توانید این کد را در `HTML` خود `Paste` استفاده کنید

```html
<i class="ibl64 ibl-bsi"></i> بانک صادرات
<i class="ibl64 ibl-mellat"></i> بانک ملت
<i class="ibl64 ibl-tejarat"></i> بانک تجارت
<i class="ibl64 ibl-bmi"></i> بانک ملی
<i class="ibl64 ibl-sepah"></i> بانک سپه
<i class="ibl64 ibl-bki"></i> بانک کشاورزی
<i class="ibl64 ibl-parsian"></i> بانک پارسیان
```

&#x202b;هر لوگو در چهار سایز 32، 64، 128 و 256 قابل استفاده است.

&#x202b;برای استفاده از هر سایز کلاس مشخص کننده سایز آن را مطابق نمونه زیر انتخاب کنید

&#x202b;همچنین می توانید با مراجعه به [سایت پروژه](https://webdesigniran.github.io/IranianBankLogos/) بر روی هر لوگو کلیک کنید تا کد `HTML` مربوطه در کلیپ.بورد. کپی شود. 

```html
بانک مسکن سایز 32 <i class="ibl32 ibl-maskan"></i>
بانک مسکن سایز 64 <i class="ibl64 ibl-maskan"></i>
بانک مسکن سایز 128 <i class="ibl128 ibl-maskan"></i>
بانک مسکن سایز 256 <i class="ibl256 ibl-maskan"></i>
```


<div style="text-align: center !important;">
     <a target="_blank" href="https://amastaneh.github.io/IranianBankLogos/" class="">
          <img alt="لوگوی بانک ها و موسسات مالی و اعتباری ایران"
               src="https://user-images.githubusercontent.com/6195199/202778391-f3083e5a-e2a2-4ba5-baeb-03e4fdc9d22c.png" 
               width="63%" />
     </a>
</div>


# امکانات
- &#x202b;فرمت تصاویر PNG24 بدون شفافیت است
- &#x202b;از هر لوگو دو نسخه رنگی و خاکستری در پوشه تصاویر موجود است
- &#x202b;لوگوها در سایز پایه 300 پیکسل و مربعی طراحی شده اند
- &#x202b;خروجی با کیفیت در سایزهای 32 و 64 و 128 و 256 آماده شده است
- &#x202b;لوگوها با حفظ تناسب در محدوده های یکسان (در میان خطوط راهنما) متحد الشکل شده اند
- &#x202b;منبع فایل های گرافیکی (فتوشاپ فایل ها) منتشر شده است


<div style="text-align: center !important;">
     <img alt="نمایی از خطوط راهنما و محدود سازی ابعاد لوگوها"
          src="https://cloud.githubusercontent.com/assets/6195199/15833653/01982676-2c3d-11e6-8bbf-00c1310d73de.png" 
          width="63%" />
</div>


# نحوه تولید و انتشار
- با کمک از فایل فتوشاپ-لوگو یک لوگوی جدید می سازیم
- سپس فایل های تصاویر رو به روزآوری می کنیم
- بعد فایل فتوشاپ-اسپریت رو به روزآوری می کنیم
- با فوتوشاپ چهار اسپریت جدید تولید می کنیم
- در فولدر سورس،‌ فایل های اسپریت را به روزآوری می کنیم
- در فولدر سورس،‌ فایل استایل را به روزآوری می کنیم
- نتایج جدید را دستی از سورس به فولدر مقصد کپی می کنیم
- حالا فولدر مقصد را پابلیش می کنیم
- نسخه برنامه را افزایش می دهیم
- برای پابلیش در مسیر اصلی دستورات زیر را استفاده می کنیم
     - اولین بار `npm adduser`
     - اولین بار `npm whoami`
     - هر بار `npm publish --access public`
- بعد از آن نسخه دمو را هم اپدیت و از داخل پوشه دمو، پابلیش می کنیم
     - دستور `yarn deploy`
- نتایج حجم فولدر مقصد را اندازه گیری کرده و README.md را آپدیت می کنیم
- فایل SECURITY.md رو به روزآوری کنیم

# پشتیبانی
لطفا اگر نسخه تصویری بهتری برای یک نمایه / لوگو یافته اید
یا اگر مشکلی مشاهده کردید
یا اگر پیشنهادی دارید

- &#x202b;یا Issue بزنید
- &#x202b;یا Fork & Pull کنید
- &#x202b;یا حداقل یک تلفن یا موبایل بزنید به [طراحی وب ایران](http://webdesigniran.com)

# License

The project is dedicated to public and is free for all uses, commercial or otherwise.
Supported by [Web Design Iran](http://webdesigniran.com)

این پروژه تحت حمایت [طراحی وب ایران](http://webdesigniran.com) بوده و برای استفاده تجاری یا غیر تجاری، رایگان است

<!-- Definitions -->

[gitter-badge]: https://badges.gitter.im/webdesigniran/IranianBankLogos.svg

[gitter]: https://gitter.im/webdesigniran/IranianBankLogos?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

[codacy-badge]: https://app.codacy.com/project/badge/Grade/6b6a81d6448c41b3903b220d70df3759

[codacy]: https://www.codacy.com/gh/amastaneh/IranianBankLogos/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=amastaneh/IranianBankLogos&amp;utm_campaign=Badge_Grade

[releases-badge]: https://img.shields.io/badge/release-v2.0-blue.svg?style=flat

[releases]: https://github.com/webdesigniran/IranianBankLogos

[download-badge]: https://img.shields.io/badge/download-260k-brightgreen.svg?style=flat

[download]: https://github.com/webdesigniran/IranianBankLogos

[synk]: https://snyk.io/test/github/amastaneh/IranianBankLogos/badge.svg
