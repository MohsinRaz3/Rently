import { CustomFilter, SearchBar, Hero } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-contianer'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p> Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fule" />
            <CustomFilter title="year" />

          </div>

        </div>

      </div>
    </main>
  )
}
