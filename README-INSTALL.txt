OVAAM HOME PAGE - INSTALLATION

1. ZIP ko extract karo.
2. Terminal me frontend folder kholo:
   cd /var/www/html/www.ovaam.com

3. Bootstrap 5 install karo:
   npm install bootstrap@5.3.8

4. ZIP ke src folder ko project ke src folder me merge/replace karo.
   Ye files update hongi:
   - src/App.jsx
   - src/index.css
   - src/main.jsx
   Aur naya folder:
   - src/home/HomePage.jsx
   - src/home/home.css

5. OVAAM logo image yahan rakho:
   public/ovaam-logo.png

6. Vite restart karo:
   npm run dev

IMPORTANT:
- Existing backend files change nahi honge.
- Existing login API, customer dashboard aur AdminPanel imports preserve kiye gaye hain.
- Home Page ka CSS alag src/home/home.css me hai.
- Hero ke laptop/mobile preview ko CSS se banaya gaya hai; extra image asset ki zarurat nahi.
- "Get Started Free" aur "Log In" abhi existing login screen kholte hain.
