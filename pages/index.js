import fetch from 'isomorphic-unfetch';
import Places from '../component/Results';

const Index = ({ results }) => {
  return (
    <div>
      <Places results={results} />
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/places');
  const json = await res.json();

  return { results: json.results };
};

export default Index;
