import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/x.png'
import hero from '../public/Mac-hero-still.svg'
import artist1 from '../public/3018.png'
import artist2 from '../public/1379.png'
import artist3 from '../public/6861.png'
import artist4 from '../public/8114.png'
import artist5 from '../public/9069.png'
import artist6 from '../public/763.png'


const Home = () => {
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  const getbfPass = async () => {
    const request = await fetch('/api/getpass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
    const data = await request.json()
    if (request.ok) {
      alert('Access NFT granted successfully!')
    } else alert('Something went wrong. Please try again.')
  }

  return (
    <div>

      <Head>
        <title>BlockFather</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="tailwind.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      
      <title>BlockFather NFT</title>
     

      <nav className=" order-first px-5 md:px-8 lg:px-12 py-3 sticky z-50 top-0 left-0 h-20 w-screen m-0
                      flex justify-between items-center text-center mx-auto
                    text-cyan-900 bg-gradient-to-br from-emerald-300  to-pink-300 shadow-indigo-400 shadow-lg">

            <div className=" flex align-bottom">
              <Image src={logo} alt="blockfather_logo" />
            </div>
            
            <div className="hidden md:flex space-x-12 items-center mb-6 scroll-smooth">
              <a href="#" className="font-FuzzyBubbles md:text-2xl text-blue-500">
                Home</a>
              <a href="#pipeline" className="font-FuzzyBubbles md:text-md bg-clip-text bg-gradient-to-br from-green-200 to-stone-900 animate-jitter ">
                Projects</a>
              <a href="#art" className="font-FuzzyBubbles md:text-md bg-clip-text bg-gradient-to-br from-green-200 to-stone-900 ">
                Art</a>
              <a href="#contact" className="font-FuzzyBubbles md:text-md bg-clip-text bg-gradient-to-br from-green-200 to-stone-900 ">
                Get in Touch</a>
              {/*}
              <a href="#contact">
                <button className=" rounded-md bg-gradient-to-br font-FuzzyBubbles from-emerald-200  to-indigo-200 px-5 py-2 text-blue-500">
                  Contact Father
                </button>
              </a>*/}
              </div>
              
            

            <div className="md:hidden">
              <div className="p-4 space-y-2 bg-teal-400 rounded shadow-md">
                <span className="block w-8 h-0.5 bg-indigo-600"></span>
                <span className="block w-8 h-0.5 bg-indigo-400"></span>
                <span className="block w-8 h-0.5 bg-indigo-400"></span>
              </div>
            </div>

      </nav>

      <div className="sm:hidden absolute bottom-5 -left-8 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multipl filter blur-xl opacity-10 animate-blob "></div>
      <div className="absolute top-16 -left-6 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-16 -right-72 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multipl filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-5 -right-6 w-96 h-96 bg-fuchsia-600  rounded-full mix-blend-multipl filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-3/4 -center w-72 h-72 bg-emerald-400 rounded-full mix-blend-multipl filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-3/4 -center w-72 h-72 bg-rose-300  rounded-full mix-blend-multipl filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className=" bg-gradient-to-t from-zinc-600 to-black flex min-h-screen flex-col items-center justify-center">


      

        {address ? (
          <>
            <div className="text-2xl font-FuzzyBubbles font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-br 
              from-rose-200  to-teal-300 text-center"><br /><br />
                Welcome, you have found your way<br /> to BlockFather's private Mintery.
            </div>

            <br /><br />

            <button
              onClick={getbfPass}
              className="rounded-md bg-gradient-to-br from-teal-200  to-pink-200 px-5 py-3 text-gray-800 animate-pulse">
                Get BlockFather Pass
            </button>

            <div className="mt-10 text-teal-200 text-center">
                    OR<br /><br /><br />
                    I am a club member...<br /><br />
                  <span className="font-FuzzyBubbles text-3xl text-pink-500 text-bold">  
                  <Link href="/exclusive">let's go</Link>
                  </span>
            </div>
          </>
        ) : (
          <>
            <div class="container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <div class="flex flex-wrap md:flex-nowrap">

                <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                    <h1 id="home" class="font-FuzzyBubbles font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-br 
                          from-rose-100  to-fuchsia-200 text-center opacity-100     text-5xl lg:text-6xl md:text-left">
                            Projects<br />
                             with <br />
                             Impact</h1>
                    <div class="w-full flex justify-center md:justify-start py-8">
                      {/*<button className="m-2 shadow rounded-md bg-gradient-to-br from-teal-200 via-orange-400 to-emerald-300 px-5 py-3 text-gray-800 animate-bfpulse"
                         onClick={connectWithMetamask} 
                        >
                        Connect Soon
                      </button>*/}
                       <button className="m-2 shadow rounded-md bg-gradient-to-br from-teal-200 via-orange-400 to-emerald-300 px-5 py-3 text-gray-800 animate-bfpulse"
                         
                        >
                        Connect Soon
                      </button>
                    </div>
                </div>
                
                <Image src={hero} alt="blockfather_logo" />
              </div>
            </div>

            

            <div id="pipeline"  class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-20 w-full">
              <section class="w-full">
                <h2 className="text-emerald-300">Member's only Exclusive projects in the pipelines</h2>
                <p className="text-rose-300">BlockFather is hear now to guide the way to eternal value and utility.</p>
                

                <h2 className="text-emerald-300 font-FuzzyBubbles font-bold text-xl animate-jitter mt-48">
                  The Pipeline
                </h2>

                <p className="text-rose-300 font-FuzzyBubbles text-md">
                      All NFT projects curated by BlockFather are developed to generated long-term value for club members. <br />
                      BlockFather is on a mission to build a community of like-minded individuals who are passionate about the positive impact of blockchain technology.
                      <br />
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
                  
                    <div>
                      <div className="card">
                        Miners Guild
                      </div>
                      <div className="mt-1 text-center">
                        
                      </div>
                    </div>

                    <div>
                      <div class="card">
                        MetaBrew
                      </div>
                      <div className="mt-1 text-center">
                        
                      </div>
                    </div>

                    <div>
                      <div class="card">
                        CoinPad<br /> Travel
                      </div>
                      <div className="mt-1 text-center">
                        
                      </div>
                    </div>

                    <div>
                      <div class="card">
                      skibunnies<br />.nft
                      </div>
                      <div className="mt-1 text-center">
                      
                      </div>
                    </div>

                    <div>
                      <div class="card">
                      merrybitmas<br />.nft
                      </div>
                      <div className="mt-1 text-center">
                    
                      </div>
                    </div>

                    <div>
                      <div class="card">
                      leprechaun<br />games<br />.nft
                      </div>
                      <div className="mt-1 text-center">
                      
                      </div>
                    </div>
                  
                  
                </div>
              </section>
            </div>
            <span id="art"> </span>
            <div  class="container mt-36 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <section  class="w-full">
                <h2  className="text-emerald-300 font-FuzzyBubbles font-bold text-xl animate-jitter">Art Curration</h2>
                <p className="text-rose-300 font-FuzzyBubbles text-md">
                Art inspires us to create. We are a community of artists, designers, and developers who are passionate about the positive impact of blockchain technology. 
                Because of this we are creating a curated collection of art that will inspire us to achieve the goals we strive to achieve.
                  <br />
                  </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <Image src={artist1} alt="blockfather_logo" />
                  <Image src={artist2} alt="blockfather_logo" />
                  <Image src={artist3} alt="blockfather_logo" />
                  <Image src={artist4} alt="blockfather_logo" />
                  <Image src={artist5} alt="blockfather_logo" />
                  <Image src={artist6} alt="blockfather_logo" />
              
                </div>
              </section>
            </div>




            
            <div class="container mt-36 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full mb-20">
              <section class="w-full">
                
                <h2 id="work" className="text-emerald-300 font-FuzzyBubbles font-bold text-xl animate-jitter">Drop BlockFather a message.</h2>
                  
                
                <p id="contact" className="text-rose-300 font-FuzzyBubbles text-md mt-4">
                   If you were introduced to BlockFather at
                   <span className=" text-violet-400 font-FuzzyBubbles font-bold text-xl animate-jitter"> VeeCon 💚</span>  <br />  <br />
                   please give us a like & Follow on twitter to stay in the know on project developments.   <br />  <br />
                   feel free to include a message of how you found us and your ETH address in your message 🦄
                </p>
                
                <div id="contact" class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">

                  <div class="mt-2 flex-auto">

                    <div class="flex-auto mt-6 space-x-20 ">

                      <div class="flex items-center space-x-8 ">
                        
                        <a href="https://twitter.com/0xblockfather">
                          <svg class="w-8 h-8 lg:w-12 lg:h-12" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z" fill="cyan"/></svg>								
                        </a>

                        <a href="https://twitter.com/0xblockfather"  className="text-rose-300 font-FuzzyBubbles text-md underline " data-show-count="false">0xblockfather</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  
                      </div>

                      <a href="mailto:sean@blockfather.xyz" className="text-rose-300 font-FuzzyBubbles text-md underline mt-0 block">sean@blockfather.xyz</a>
                      
                    </div>
                  </div>
                  
                </div>

              </section>
            </div>
            
            
          </>
          
        )}

      

      </div>
    </div>
  )
}

export default Home
