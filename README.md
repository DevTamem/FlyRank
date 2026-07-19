# FlyRank AI Internship

Welcome to my internship repository!

This repository documents my journey throughout the **FlyRank AI Engineering Internship**. It serves as a central place for the projects, experiments, technical notes, and learning outcomes I complete during the program.

## 🎯 Goals

- Strengthen my AI engineering skills
- Build real-world AI applications
- Learn industry best practices
- Explore LLMs, AI agents, and automation
- Document my progress and lessons learned

## 📂 Repository Structure

```
.
├── assignments/
│   ├── week-1/
│   │   └── CRUD.js
│   ├── week-2/
│   ├── week-3/
│   ├── week-4/
│   ├── week-5/
│   ├── week-6/
│   ├── week-7/
│   └── week-8/
├── capstone-project/
│   ├── src/
│   └── tests/
├── shared-utils/
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── .env.example
```

## 🛠️ Technologies

- Node.js
- Express.js
- Python
- Git & GitHub
- Large Language Models (LLMs)
- AI Agents
- APIs
- Prompt Engineering
- Vector Databases (when applicable)
- Docker (when applicable)

## 📈 Progress

- [x] Week 1 - Todo CRUD API
- [ ] Week 2
- [ ] Week 3
- [ ] Week 4
- [ ] Week 5
- [ ] Week 6
- [ ] Final Project

## 📚 What You'll Find Here

- Internship assignments
- AI projects
- Experiments and prototypes
- Technical documentation
- Personal notes and reflections

## ▶️ How to Run

### Week 1 — Todo CRUD API

**1. Navigate to the week-1 folder:**
```bash
cd assignments/week-1
```

**2. Install dependencies:**
```bash
npm install
```

**3. Start the server:**
```bash
node CRUD.js
```

**4. Test the API:**

You can use Postman, curl, or your browser for the root route. The API includes these endpoints:
```text
GET    http://localhost:3000/
GET    http://localhost:3000/todos
GET    http://localhost:3000/todos/:id
POST   http://localhost:3000/todos
PUT    http://localhost:3000/todos/:id
PATCH  http://localhost:3000/todos/:id
DELETE http://localhost:3000/todos/:id
```

Example request body for creating a todo:
```json
{
  "title": "Buy milk",
  "completed": false
}
```

Example request body for updating a todo:
```json
{
  "completed": true
}
```

The root route returns a quick summary of the available CRUD endpoints. The API keeps data in memory, so todos reset when the server restarts.
## 📄 License

This repository contains my personal work completed during the internship. Company-confidential or proprietary materials are not included.
