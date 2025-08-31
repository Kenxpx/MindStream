# MindStream – Accessible Web Reading

**MindStream** is a Chrome extension that makes web content easier to read.  
It simplifies complex text, supports different reading modes (ADHD, Dyslexia, General), and gives you full control over how pages look — without cutting information.  

🔴 **Live Demo:** [mindstream.sachinbind.net](https://mindstream.sachinbind.net/)  

---

## ✨ Features

- **AI-powered simplification** (Chrome Gemini Nano, offline)  
- **3 simplification levels** → Low · Medium · High  
- **Modes for different needs** → General · Focus/Attention (ADHD) · Predictable Flow (Dyslexia)  
- **Custom display** → Fonts (OpenDyslexic), themes, spacing controls  
- **Instant updates** → Page changes in real-time, no reload  

---

## 🛠 Requirements

- **Chrome Dev or Canary** (`>= 128.0.6545.0`)  
- **Storage:** 22 GB free (Gemini Nano requirement)  
- **Flags to enable:**  
  - `chrome://flags/#optimization-guide-on-device-model` → **Enabled BypassPerfRequirement**  
  - `chrome://flags/#prompt-api-for-gemini-nano` → **Enabled**  

---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Kenxpx/MindStream.git
cd MindStream
```

### 2. Enable Developer Mode in Chrome
- Open `chrome://extensions/`  
- Toggle **Developer Mode** (top right)  

### 3. Load the extension
- Click **Load unpacked**  
- Select the `MindStream` folder  

The extension icon will appear in your Chrome toolbar. ✅  

---

## 🔧 Build & Customize

If you want to **make changes** (themes, features, etc.):  

### 1. Install dependencies
```bash
npm install
```

### 2. Run in dev mode
```bash
npm run dev
```

### 3. Build for release
```bash
npm run build
```

- The output will be in the `dist/` folder.  
- Load `dist/` as an unpacked extension in Chrome (instead of `MindStream/`).  

---

## ⚙️ Configuration

- **Themes:** Change default theme in `config/theme.js`  
- **Fonts:** Enable/disable OpenDyslexic in `config/fonts.js`  
- **Modes:** Edit or add reading modes in `src/modes/`  

---

## 🛠 Troubleshooting

- Extension not loading? → Check Chrome flags are enabled  
- AI not working? → Make sure you’re on **Dev/Canary ≥ 128**  
- Still broken? → Restart Chrome and reload extension  

---

## 📬 Support

Need help? Open an issue or email:  
**sachinbinduc@gmail.com**  

---

## 📜 License

MIT License — free to use and modify.  

---

## 👨‍💻 Author

Created by [Kenxpx](https://github.com/Kenxpx) · Maintained by [Sachinxps](https://github.com/sachinxps)  
