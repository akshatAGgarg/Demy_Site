# CLI Test Site

A minimal **Next.js** web app that provides a UI for testing your CLI tool and an API endpoint that the CLI can interact with.

---

## 📦 Project Structure
```
cli-test-site/
├─ .gitignore
├─ README.md          ← you're reading this
├─ package.json
├─ next.config.js
├─ vercel.json
├─ public/
│   └─ favicon.ico
├─ pages/
│   ├─ index.js       ← UI page
│   └─ api/
│       └─ test.js    ← API endpoint
└─ styles/
    └─ Home.module.css
```

---

## 🚀 Getting Started (local development)
```bash
# 1️⃣ Clone the repo (once you push it to GitHub)
git clone https://github.com/<your‑username>/cli-test-site.git
cd cli-test-site

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the dev server
npm run dev
```
Open <http://localhost:3000> – you should see the **CLI Test Interface**.

---

## 🛠️ How it works
- **UI (`pages/index.js`)** – a textarea where you type a command/parameters, a *Run Test* button, and an output area.
- **API (`pages/api/test.js`)** – receives a `POST` with `{ command: "…" }` and currently echoes the command back with a timestamp. Replace the echo logic with whatever your CLI needs (e.g., spawn a child process, call a remote service, etc.).
- **Styling (`styles/Home.module.css`)** – clean, minimal design using a gradient background and the Inter font.

---

## 📦 Deployment (Vercel – free & automatic)
1. **Create a GitHub repository** and push the code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your‑username>/cli-test-site.git
git push -u origin main
```
2. **Import the repo on Vercel**:
   - Go to <https://vercel.com/dashboard> → **New Project** → **Import Git Repository** → select your repo.
   - Vercel auto‑detects the Next.js framework; keep the defaults.
3. **Deploy** – Vercel runs `npm install && npm run build` automatically.
4. **Automatic redeploys** – every push to `main` (or any branch you configure) triggers a new deployment.

---

## 🧪 Quick CLI test (using `curl`)
```bash
curl -X POST https://<your‑vercel‑url>/api/test \
  -H "Content-Type: application/json" \
  -d '{"command":"my‑test‑command"}'
```
You should receive a JSON response like:
```json
{ "result": "Received command: \"my‑test‑command\"\nTimestamp: 2026‑01‑15T14:00:00.000Z" }
```
Replace the echo logic in `pages/api/test.js` with your real CLI integration.

---

## ✏️ Making future edits
- Edit any file under `pages/`, `styles/`, or add new components.
- Commit & push → Vercel automatically rebuilds and redeploys.
- For more complex changes (e.g., adding new API routes), just create new files under `pages/api/`.

---

## 🎨 Design notes
- Uses the **Inter** font (Google Fonts) – you can change it in `styles/Home.module.css`.
- Minimalist gradient background for a premium feel.
- All UI elements have subtle hover effects and disabled states.

---

## 📚 Further reading
- Next.js docs: <https://nextjs.org/docs>
- Vercel deployment guide: <https://vercel.com/docs>
- React hooks reference: <https://reactjs.org/docs/hooks-intro.html>

---

Happy testing! 🚀
