import { PostgrestClient } from '@supabase/postgrest-js';
import { Database } from './database.types';

export const POSTGREST_URL = 'http://localhost:3000/';
export const postgrestClient = new PostgrestClient<Database>(POSTGREST_URL);
