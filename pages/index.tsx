import type { NextPage } from 'next'
import Head from 'next/head'
import Wrapper from "@components/wrapper"

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>eKuitti</title>
        <meta name="description" content="" />
      </Head>
      
      <div className="flex">
        <Sidebar />
        <main className='w-full'>
          <Navigation />
          <div className='px-4 my-5'>
            <h2 className='text-2xl font-semibold'>Terve [henkilö]!</h2>
            
          </div>
          <div className='flex flex-col space-y-5 px-4'>
            <p>Tässä on lompakkosi viimeisimmät tapahtumat</p>
            <div className='flex justify-between gap-10'>
              
              <div className='flex-grow bg-neutral-800 px-4 py-5 rounded'>
                <p className='text-lg mb-3'>Uusimmat kuitit</p>
                <div className=''>
                  <div className='odd:bg-neutral-700 flex gap-2 p-1'>
                    <p>Päivämäärä</p>
                    <p>Yhtiö</p>
                    <p>Summa</p>
                  </div>
                  <div className='odd:bg-neutral-700 flex gap-2 p-1'>
                    <p>pp-kk-vvvv</p>
                    <p>Esimerkki Oy</p>
                    <p>xx,xx eur</p>
                  </div>
                  <div className='odd:bg-neutral-700 flex gap-2 p-1'>
                    <p>pp-kk-vvvv</p>
                    <p>Esimerkki Oy</p>
                    <p>xx,xx eur</p>
                  </div>
                </div>
              </div>

              <div className='flex-grow bg-neutral-800 px-4 py-5 rounded'>
                <p className='text-lg mb-3'>Lähetetyt kuitit</p>
                <div className=''>
                  <div className='odd:bg-neutral-700 flex gap-2 p-1'>
                    <p>Päivämäärä</p>
                    <p>Yhtiö</p>
                    <p>Summa</p>
                    <p>Vastaanottaja</p>
                  </div>
                  <div className='odd:bg-neutral-700 flex gap-2 p-1'>
                    <p>pp-kk-vvvv</p>
                    <p>Esimerkki Oy</p>
                    <p>xx,xx eur</p>
                    <p>Tilitoimisto Oy</p>
                  </div>
                  <div className='odd:bg-neutral-700 flex gap-2 p-1'>
                    <p>pp-kk-vvvv</p>
                    <p>Esimerkki Oy</p>
                    <p>xx,xx eur</p>
                    <p>Verohallinto</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='divide-y divide-neutral-700'>
            {["lorem", "ipsum", "dolor", "sit", "amet", "jotain", "testi"].map((thing) =>
            <div className='px-4 py-10'>{thing}</div>
            )}
          </div>
        </main>
      </div>
    </Wrapper>
  )
}

const Navigation: React.FC = ({ children }) => {
  return (
    <nav className="bg-neutral-900 sticky top-0 border-neutral-600 py-2">
      <div className="flex container mx-auto px-4 items-center justify-between">
        <div className='flex space-x-10'>
          <input className='bg-neutral-700 hover:bg-neutral-600 transition rounded-full px-5 py-1 w-96' placeholder='Hae...'/>
          <button className='bg-neutral-700 hover:bg-neutral-600 transition px-8 py-1 rounded'>Lisää kuitti</button>
        </div>
        <div className='flex space-x-5'>
          <span className='h-10 w-10 rounded-full bg-neutral-700 hover:bg-neutral-600 transition' />
          <span className='h-10 w-10 rounded-full bg-neutral-700 hover:bg-neutral-600 transition' />
          <span className='h-10 w-10 rounded-full bg-neutral-700 hover:bg-neutral-600 transition' />
        </div>
      </div>
    </nav>
  )
}

const Sidebar: React.FC = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 z-10 w-56">
        <div className='flex flex-col h-screen bg-neutral-800 p-4 divide-y divide-neutral-700'>
          <div className='hover:bg-neutral-700 transition px-1 py-1 my-1 rounded'>Valikko 1</div>
          <div className='hover:bg-neutral-700 transition px-1 py-1 my-1 rounded'>Valikko 2</div>
          <div className='hover:bg-neutral-700 transition px-1 py-1 my-1 rounded'>Valikko 3</div>
        </div>
      </div>
    </div>
  )
}

export default Home
