# Peer-Sync-Project
A collaborative university peer-learning platform

Peer Sync is a web platform designed to help university students connect with senior peers, access curated study resources, and participate in peer-learning support groups.

---

## 🛠️ Technology Stack

- **Frontend:** React + Vite + JavaScript
- **Backend:** Node.js + Express + JavaScript
- **Database:** PostgreSQL (Schema defined; connection to be added in future sprint)
- **AI:** Planned feature for smart study resource recommendations (Conceptual roadmap in `docs/`)

---

## 📁 Project Structure

```text
Peer-Sync-Project/
├── frontend/             # React + Vite client application
│   ├── src/              # React components, styles, and entry point
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration
│   └── package.json      # Frontend dependencies & scripts
├── backend/              # Node.js + Express REST API
│   ├── src/
│   │   └── server.js     # Express server & health-check endpoint
│   ├── .env.example      # Sample environment variables
│   └── package.json      # Backend dependencies & scripts
├── database/             # PostgreSQL database resources
│   ├── schema.sql        # Initial relational database schema
│   └── README.md         # Database setup instructions
├── resources/            # Academic & project reference materials
│   └── README.md         # Resource organization guidelines
├── docs/                 # Project documentation & design specs
│   └── ai-features.md    # Proposals for future AI learning features
├── .gitignore            # Git exclusion rules (node_modules, .env, dist)
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

Follow these beginner-friendly steps to set up and run Peer Sync on your computer.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed on your system. You can verify this by running:
```bash
node -v
npm -v
```

---

### 1. Setting Up and Running the Backend

1. Open your terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. (Optional) Create your local environment file:
   ```bash
   cp .env.example .env
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. Verify that the server is working:
   - Open your browser or API client to [http://localhost:5000/api/health](http://localhost:5000/api/health).
   - You should receive a JSON response confirming: `{"status": "OK", "message": "Peer Sync backend is healthy and running"}`.

---

### 2. Setting Up and Running the Frontend

1. Open a new terminal window and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the link shown in your terminal (usually [http://localhost:5173](http://localhost:5173)) in your web browser to view the Peer Sync home page.

---

## 🌿 Git Branching Strategy for Our Team

To collaborate smoothly and avoid merge conflicts:
- `main`: Production-ready, stable codebase.
- Always create a dedicated branch for new features or fixes:
  ```bash
  git checkout -b feature/<feature-name>
  # Example: git checkout -b feature/user-profile
  ```
- Test your changes locally before opening a pull request to `main`.
- Never commit secrets, passwords, or `.env` files.
