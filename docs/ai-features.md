# AI Feature Proposals for Peer Sync

> **Status:** Conceptual Proposal (Not yet implemented)  
> **Target:** Future sprint after core frontend, backend, and database features are stabilized.

---

## 1. Overview
The Peer Sync platform aims to incorporate artificial intelligence to enhance peer-to-peer learning and make study materials more accessible for university students. This document outlines proposed AI features under consideration for our university project.

---

## 2. Proposed AI Features

### A. Intelligent Study Resource Recommender
- **Concept:** An AI recommendation engine that suggests relevant study guides, summaries, and past papers based on a student's enrolled courses and current academic week/topic.
- **Student Value:** Reduces time spent searching for reliable study material before exams and deadlines.
- **Potential Approaches:**
  - Content-based filtering using keyword and topic similarity.
  - Collaborative filtering based on materials frequently used and upvoted by seniors.

### B. Smart Peer & Senior Mentor Matching
- **Concept:** Match junior students needing help with senior mentors who achieved high grades in the relevant module and share compatible availability.
- **Student Value:** Automates the mentor discovery process and ensures students get help from the most qualified peer.

### C. AI Study Buddy & Question Summarizer
- **Concept:** A conversational helper capable of breaking down complex syllabus topics, generating flashcard quizzes, or answering basic academic questions based strictly on peer-uploaded lecture notes.
- **Student Value:** Provides 24/7 self-study support when senior mentors are unavailable.

### D. Automated Resource Tagging & Search
- **Concept:** Automatically extract course tags, topics, and difficulty levels from uploaded documents to maintain an organized, searchable library.
- **Student Value:** Keeps resources well-categorized without requiring manual tagging from uploaders.

---

## 3. Implementation Roadmap
1. **Phase 1 (Current):** Basic repository setup, frontend UI, backend health check API.
2. **Phase 2:** PostgreSQL database connection, user registration, and resource catalog.
3. **Phase 3:** Review project requirements and select one or two high-impact AI features (e.g., Study Resource Recommender).
4. **Phase 4:** Integrate selected AI API or model, conduct testing, and present university project demo.
