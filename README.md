# Instalearn - Professional Learning Platform

Instalearn is a comprehensive learning and training platform built with a **Next.js** frontend and a **Django** backend. It features AI-powered content generation, video feeds, courses, and interactive learning tools like flashcards and quizzes.

## 🚀 Project Architecture

### Frontend (Next.js)
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Pipeline**:
  - `src/lib/api.ts`: Centralized API service for backend communication.
  - `.env.local`: Environment configuration for API endpoints.
  - `src/app/`: Mobile-first routes for Landing, Auth, and Dashboard.

### Backend (Django)
- **Framework**: Django 5.x
- **Database**: SQLite (default) / PostgreSQL (supported)
- **API**: Django Rest Framework (DRF)
- **Location**: `/backend` directory

---

## 🛠️ Getting Started

### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) for the landing page.

### 2. Backend Setup
```bash
cd backend
# Create virtual environment (recommended)
python -m venv venv
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations and start server
python manage.py migrate
python manage.py runserver
```
The backend will run on [http://localhost:8000](http://localhost:8000).

---

## 🛣️ API Documentation (Backend Routes)

All API endpoints are prefixed with `/api/v1/`.

### 1. User Authentication
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `user/login` | POST | Organization User Login |
| `user/send-otp` | POST | Send OTP for verification |
| `user/profile` | GET/PUT | Manage User Profile |
| `source/internal/login` | POST | Platform Superuser Login |
| `source/internal/create-organization` | POST | Create a new Organization |

### 2. Organization & Content
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `org/contents` | GET | List all organization content |
| `org/contents/most-viewed` | GET | List popular content |
| `org/contents/recent-added` | GET | List latest content |
| `org/content/video` | GET/POST | Video management |
| `org/content/course` | GET/POST | Course management |
| `org/content/flashcard` | GET/POST | Flashcard content |
| `org/content/quiz` | GET/POST | Quiz content |
| `org/content/insights` | GET | Content performance analytics |
| `org/content/explore-list` | GET | Explore page data |

### 3. AI Powered Services
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `org/ai/content-generation` | POST | Generate AI training content |
| `org/ai/content-generation/status` | GET | Track generation progress |
| `org/ai/content-generation/list` | GET | List generated items |
| `org/ai/language-options` | GET | AI language support list |

### 4. Viewer Interaction
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `org/content/feeds` | GET | Personalized content feed |
| `org/content/my-watch-history` | GET | User watch history |
| `org/content/action` | POST | Interaction (Like, Share, etc.) |
| `org/content/shared` | GET | List shared content |

### 5. Utilities
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `org/utils/file-upload` | POST | Generic file upload service |
| `org/utils/bulk-upload-sample` | GET | Download bulk upload templates |

---

## 📱 Mobile-First Features
- **Landing Page**: Brand onboarding with "Continue" flow.
- **Interactive Auth**: Email/Password and OTP-based login options.
- **Admin Dashboard**: Overview of organization KPIs and content.
- **Profile Management**: Detailed user and organization settings.
