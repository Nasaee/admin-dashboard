import { Link } from 'react-router-dom';
import { menu } from '../../data';
import './menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div key={item.id} className='item'>
          <span className='title'>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className='list-item'>
              <img src={listItem.icon} alt='' />
              <span className='list-item-title'>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Menu;
