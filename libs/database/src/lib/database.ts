import { PostgrestClient } from '@supabase/postgrest-js';

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          id: string | number;
          title: string;
        };
        // Insert: {}; // The data expected passed to an "insert" statement.
        // Update: {}; // The data expected passed to an "update" statement.
      };
    };
  };
}

export const POSTGREST_URL = 'http://localhost:3000/';
export const postgrestClient = new PostgrestClient<Database>(POSTGREST_URL);
