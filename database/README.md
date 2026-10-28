# Database Directory

This directory contains database schemas, migrations, and seed scripts for PostgreSQL.

## Status
> **Notice:** The database is **not connected** to the application yet. This folder currently contains the starter schema (`schema.sql`) for team review and planning.

## Files
- `schema.sql`: Initial PostgreSQL schema defining core tables (`users`, `resources`, `study_sessions`, `session_attendees`).

## Planned Future Setup
When our team is ready to connect PostgreSQL:
1. Ensure PostgreSQL is installed locally or obtain a cloud database instance (e.g., Supabase, Neon, or local PostgreSQL).
2. Create the database:
   ```bash
   createdb peer_sync_db
   ```
3. Load the schema:
   ```bash
   psql -d peer_sync_db -f schema.sql
   ```
4. Configure credentials in `backend/.env`.
