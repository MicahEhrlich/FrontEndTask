import css from 'styled-jsx/css';

export const styles = css`
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container > div {
    display: inline-block;
    margin: 8px;
    font-family: Helvetica, sans-serif;
  }
  .result {
    width: 420px;
    height: 370px;
    border: 1px groove;
    padding: 10px 15px;
    background: #e6e6e6;
    border-color: #d9d9d9;
  }
  #tag {
    margin-right: 0.8em;
    margin-top: 0.5em;
    margin-bottom: 0.05em;
    display: inline-block;
    background: #008fb3;
    border: 1px groove;
    border-color: #008ff1;
    border-radius: 2px;
    color: white;
    padding: 2px 5px;
  }
  img {
    width: 100%;
    margin-bottom: 0.05em;
  }
  h4 {
    color: Gray;
    margin-bottom: 0.05em;
  }
`;
