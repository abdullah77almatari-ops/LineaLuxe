import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"; // استيراد وحدة نظام الملفات لقراءة الصفحات تلقائياً

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// دالة ذكية للبحث عن جميع ملفات الـ HTML في مجلد المشروع الرئيسي وتجهيزها للبناء
const getHtmlEntries = () => {
  const entries = {};
  const files = fs.readdirSync(__dirname);

  files.forEach((file) => {
    if (file.endsWith(".html")) {
      const pageName = path.parse(file).name;
      entries[pageName] = path.resolve(__dirname, file);
    }
  });

  return entries;
};

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./js"), // الإعداد الخاص بك تم الحفاظ عليه هنا ولم يتأثر
    },
  },
  build: {
    rollupOptions: {
      // استدعاء الدالة لتضمين جميع صفحات الـ HTML تلقائياً
      input: getHtmlEntries(),
    },
  },
});
