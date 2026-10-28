-- ====================================================================
-- Peer Sync Database Schema (PostgreSQL)
-- University Peer-Learning Platform
-- 
-- NOTE: The database is NOT connected yet. This schema serves as an
-- initial blueprint for our team's upcoming database implementation.
-- ====================================================================

-- 1. Users Table
-- Stores student and senior mentor profiles
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'senior', 'admin')),
    department VARCHAR(100),
    year_of_study INT CHECK (year_of_study BETWEEN 1 AND 5),
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Study Resources Table
-- Stores references to notes, summaries, and exam prep resources
CREATE TABLE IF NOT EXISTS resources (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    subject_code VARCHAR(50) NOT NULL,
    resource_url TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'notes', -- e.g., 'notes', 'past_paper', 'cheatsheet'
    uploaded_by INT REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Mentorship & Peer Sessions Table
-- Stores scheduled peer learning and mentorship sessions
CREATE TABLE IF NOT EXISTS study_sessions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    subject_code VARCHAR(50) NOT NULL,
    mentor_id INT REFERENCES users(id) ON DELETE CASCADE,
    scheduled_time TIMESTAMP WITH TIME ZONE NOT NULL,
    meeting_link TEXT,
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Session Attendees Table
-- Maps student participants attending mentorship sessions
CREATE TABLE IF NOT EXISTS session_attendees (
    session_id INT REFERENCES study_sessions(id) ON DELETE CASCADE,
    student_id INT REFERENCES users(id) ON DELETE CASCADE,
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (session_id, student_id)
);
