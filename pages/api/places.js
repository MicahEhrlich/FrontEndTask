import data from '../../data.json';

export default (req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  }
};
