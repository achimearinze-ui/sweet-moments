CREATE TABLE public.enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 254),
 audience text NOT NULL CHECK (audience IN ('general','partner','volunteer','school','young-person','media','support')),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
 consent boolean NOT NULL CHECK (consent = true),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.enquiries TO anon;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public may submit enquiries only" ON public.enquiries FOR INSERT TO anon WITH CHECK (consent = true);
COMMENT ON TABLE public.enquiries IS 'Private enquiries; no visitor SELECT, UPDATE or DELETE access. Review through Lovable Cloud only.';