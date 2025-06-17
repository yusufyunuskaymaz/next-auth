# Auth0 Yetkilendirme Sistemi - Next.js & NextAuth.js

Bu proje, OAuth tabanlı kimlik doğrulama ve rol bazlı yetkilendirme sistemi geliştirmek amacıyla hazırlanmıştır. Uygulama, Auth0 üzerinden kullanıcı yönetimi yapar, NextAuth.js ile oturum kontrolü sağlar ve Next.js middleware yapısıyla route'ları korur. Proje, SOLID prensiplerine ve 12 Factor App ilkelerine uygun şekilde yapılandırılmıştır.

## 🔧 Kullanılan Teknolojiler

- **Next.js 14+ (App Router)**
- **NextAuth.js**
- **Auth0 (OAuth Provider)**
- **JWT (JSON Web Token)**
- **TypeScript**
- **TailwindCSS** (Login UI)
- **Docker**
- **.env yapılandırması**
- **Git / GitHub Flow (dev/v1.0.0 → prod/v1.0.0)**

## 🚀 Özellikler

- **OAuth Entegrasyonu:** Auth0 üzerinden Google ile giriş yapılabilir.
- **Rol Bazlı Yetkilendirme:**  
  - `admin`, `editor`, `user` olmak üzere 3 farklı rol mevcuttur.  
  - Yeni kayıt olan kullanıcıya varsayılan olarak `user` rolü atanır (backend API üzerinden).
- **Protected Routes:** Route erişimleri middleware aracılığıyla role göre sınırlandırılır.
- **Session Management:** NextAuth.js üzerinden JWT tabanlı session kontrolü yapılır.
- **Docker Desteği:** Proje containerized çalışacak şekilde yapılandırılmıştır.

## 🔐 Yetki Seviyeleri

| Kullanıcı Rolü | Erişebildiği Sayfalar     |
|----------------|----------------------------|
| `admin`        | `/admin`, `/editor`, `/user` |
| `editor`       | `/editor`, `/user`        |
| `user`         | `/user`                   |

## 👤 Test Kullanıcıları

Sistemde deneme amaçlı 3 kullanıcı mevcuttur:

| Rol    | E-posta               | Şifre        |
|--------|------------------------|--------------|
| admin  | `admin@gmail.com`     | `denemeA11+` |
| editor | `editor@gmail.com`    | `denemeA11+` |
| user   | `user@gmail.com`      | `denemeA11+` |

## ⚙️ Kurulum

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. .env.local dosyasını oluşturun ve Auth0/NextAuth bilgilerinizi girin
cp .env.example .env.local

# 3. Geliştirme sunucusunu başlatın
npm run dev
