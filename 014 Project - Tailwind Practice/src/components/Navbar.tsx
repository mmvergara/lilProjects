import './Navbar.css'

const Navbar:React.FC = ()=>{
    return (
        <header>
            <div className='bg-black p-5'>
                <ul className='text-3xl text-white font-normal list-none tracking-wider flex align-center justify-between'>
                    <div>
                        <h1>Lorem School</h1>
                    </div>
                    <div>
                        <li className='inline-block mx-5'><a href="#/" className='hover:text-4xl transition-all'>Products</a></li>
                        <li className='inline-block mx-5'><a href="#/" className='hover:text-4xl transition-all'>Home</a></li>
                        <li className='inline-block p-2 px-6 mx-5 text-cyan-800 bg-white rounded-full hover:bg-cyan-500 transition-all'><a href="#/" >AboutUS</a></li>
                    </div>
                </ul>
            </div>
        </header>
    )
}


export default Navbar ;