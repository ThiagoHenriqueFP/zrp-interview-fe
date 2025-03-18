export function Header() {
  return (
    <header className='relative top-0 p-6 bg-red-400 w-full flex justify-between items-center'>
      <h1 className='font-bold text-zinc-50 hover:text-yellow-400 transition-all duration-150'>ZRPokeApi</h1>
      <div className='*:text-zinc-50 *:hover:text-yellow-400'>
        <a href='https://www.zrp.com.br/' target='_blank'>ZRP</a>
        <a className='ml-10' href='https://pokeapi.co/' target='_blank'>PokeApi Reference</a>
      </div>
    </header>
  )
}