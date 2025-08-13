import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://htdsixjiqevjyasyytbf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZHNpeGppcWV2anlhc3l5dGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMDM2MTIsImV4cCI6MjA3MDU3OTYxMn0.43PzOxyaICY2wGiMcoEgqPjvotE6ry9D3zmTspr5vOw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
