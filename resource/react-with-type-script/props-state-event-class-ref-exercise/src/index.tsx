import ReactDom from 'react-dom';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
