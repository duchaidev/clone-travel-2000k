import { ImSearch } from 'react-icons/im'
interface Props {
  addClass?: String
}

function SeachBar({ addClass }: Props) {
  return (
    <form action="" className={`${addClass} flex items-center gap-2 bg-white rounded-full py-1.5 px-2 w-full`}>
      <label htmlFor="searchBar" className='text-xl px-2'><ImSearch /></label>
      <input id='searchBar' type="text" className='flex-1 border-none outline-none min-w-0 placeholder:text-gray-500' placeholder='Where are you going?' />
      <button type='submit' className='text-white rounded-full font-medium border-none bg-primary py-2 px-6'>Search</button>
    </form>
  )
}

export default SeachBar