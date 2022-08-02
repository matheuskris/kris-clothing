import CategoryMenu from '../../components/category-menu/category-menu.component';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <div className='categories-container'>
      <Outlet/>
      <CategoryMenu></CategoryMenu>
    </div>
    );
}

export default Home;