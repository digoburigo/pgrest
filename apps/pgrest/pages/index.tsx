import { postgrestClient } from '@postgrest/database';

async function getMovie() {
  const { data: movie } = await postgrestClient
    .from('movies')
    .select('*')
    .eq('id', '1')
    .single();
  return movie;
}

async function updateMovie() {
  const { data: movie } = await postgrestClient
    .from('movies')
    .update({ title: 'test' })
    .eq('id', 1);
  return movie;
}

export function Index() {
  return (
    <div>
      <p>index page</p>
    </div>
  );
}

export default Index;
