/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center my-8'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl mx-12 my-4'>
            {text}
          </h1>
          <br />
          <Link
            to='/foods'
            className='w-full px-5 py-4 mt-4 text-sm text-black font-bold capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md lg:w-auto hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400'
          >
            Browse All Foods
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
