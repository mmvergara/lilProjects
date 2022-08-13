
import './App.css';
import SideBar from './components/SideBar';

function App() {

  return (
    <div className="Flex ml-16 text-white">
      <SideBar/>
      <div className='mt-10 w-full h-full flex justify-center align-center flex-col'>
        <h1 className='text-3xl font-bold text-center'>Tailwind Practice Discord Themened by Fireship.io</h1>
        <h1 className='text-3xl font-bold text-center blur'>Blurry</h1>
        <h1 className='text-3xl font-bold text-center mix-blend-soft-light'>Soft Light</h1>
        <h1 className='text-3xl font-bold text-center ring-4 my-2 ring-red-500 '>Ring</h1>
      </div>
    </div>
  );
}

export default App;

