import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <strong className='text-cyan-500'>the tailwind test by:</strong>
        </h1>

        <a href="https://github.com/ItanuRomero">
          <div className="p-6 max-w-sm m-3 bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
              <img className="h-12 w-12 rounded-full" src="https://avatars.githubusercontent.com/u/66224956?s=96&v=4" alt="ChitChat Logo" />
            </div>
            <div>
              <div className="text-xl font-medium text-black">ItanuRomero</div>
              <p className="text-slate-500">Software Engineer</p>
            </div>
          </div>
        </a>

        <Link className='m-5' href="/">
        <button className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm hover:bg-slate-500 transition-all ease-linear'>this is a nice button</button>
        </Link>
        {/*To create a new color or other thing in the theme, we can use the config file*/}
        <p className='text-itanu'>this should be red</p>

        <p className='absolute bottom-0'>this should be in the bottom</p>
        
        <header className='absolute top-0'>this should be in the top</header>

        
      </main>
    </div>
  )
}

export default Home