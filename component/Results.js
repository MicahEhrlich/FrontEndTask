import { styles } from '../styles';

const Results = ({ results }) => {
  return (
    <div>
      <div className='flex-container'>
        {results.map((element, index) => (
          <div key={index} className='result'>
            <img src={element.main_photo_url} />
            <h3>{element.name}</h3>
            <h4 className='title'>{element.address}</h4>
            {JSON.parse(element.tags).map((tag, index) => (
              <h5 id='tag' key={index}>
                {tag}
              </h5>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Results;
