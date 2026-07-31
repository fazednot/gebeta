/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest's full name
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — optional contact email
  - `party_size` (int, not null) — number of guests (1–20)
  - `date` (date, not null) — requested reservation date
  - `time` (time, not null) — requested reservation time
  - `notes` (text, nullable) — optional special requests
  - `status` (text, not null, default 'pending') — pending | confirmed | cancelled
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated INSERT only (guests submit requests; they should not read/update/delete).
- No SELECT/UPDATE/DELETE policies for anon — submissions are write-only from the public site.

3. Important Notes
- This is a no-auth restaurant site. The frontend uses the anon key, so the INSERT policy MUST list `anon`.
- Only INSERT is granted publicly to prevent guests from reading or modifying other people's reservations.
- Staff review submissions via the Supabase dashboard (service role bypasses RLS).
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  party_size int NOT NULL CHECK (party_size >= 1 AND party_size <= 20),
  date date NOT NULL,
  time time NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) guests to submit reservation requests only.
DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No SELECT / UPDATE / DELETE policies: submissions are write-only from the public site.
-- Staff manage reservations via the Supabase dashboard using the service role.
