const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000; // استخدام متغير بيئي للمنفذ

// تعزيز الأمان باستخدام helmet
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            imgSrc: ["'self'", "https://api.openweathermap.org/data/2.5/weather?zip="],
            connectSrc: ["'self'", "https://api.openweathermap.org/data/2.5/weather?zip="]
        }
    }
}));

// تقديم الملفات الثابتة من مجلد 'website'
app.use(express.static(path.join(__dirname, 'website')));

// مسار لخدمة ملف index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

// معالجة الأخطاء للطرق غير المعرفة
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// معالجة الأخطاء العامة
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// بدء تشغيل الخادم
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
