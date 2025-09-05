-- Create a table for storing email signups
CREATE TABLE public.emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.emails ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (for public signup)
CREATE POLICY "Anyone can insert emails" 
ON public.emails 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to view emails (for admin access)
CREATE POLICY "Authenticated users can view emails" 
ON public.emails 
FOR SELECT 
TO authenticated
USING (true);

-- Create index for better performance on email lookups
CREATE INDEX idx_emails_email ON public.emails(email);
CREATE INDEX idx_emails_created_at ON public.emails(created_at DESC);