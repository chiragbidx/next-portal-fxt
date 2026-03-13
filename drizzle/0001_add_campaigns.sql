-- Up migration: Create campaigns table

CREATE TABLE IF NOT EXISTS "campaigns" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "recipients" json NOT NULL,
  "subject" text NOT NULL,
  "body" text NOT NULL,
  "status" text NOT NULL DEFAULT 'draft',
  "last_error" text,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);

-- Down migration: Drop campaigns
DROP TABLE IF EXISTS "campaigns";