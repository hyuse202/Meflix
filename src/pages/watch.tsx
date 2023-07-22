import Banner from '../components/Banner';
import Navbar from '../components/NavBar';
import { sections } from '../constant/section';
import MovieList from '../components/MovieList';
export default function Watch(): React.ReactElement {
  return (
    <>
      <div className='min-h-screen flex flex-col bg-black text-white'>
        <Navbar />
        <Banner />
        {sections?.map((item, index) => {
          return (
            <MovieList key={index} endpoint={item.endpoint} name={item.name} />
          );
        })}
      </div>
    </>
  );
}
