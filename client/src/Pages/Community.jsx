import React,{ useState, useEffect }  from 'react';
import ChatBot from './ChatBot';
import NavC from '../components/NavC';

const Community = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !document.getElementById('menuDropdown').contains(e.target) &&
        !document.getElementById('menuButton').contains(e.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const toggleChatBot = () => {
    setIsChatBotVisible(!isChatBotVisible);
  };
  return (
    <div>
      <NavC/>
     
<div class="flex h-screen overflow-hidden">
        
        <div class="w-1/4 bg-white border-r border-gray-300">
          
          <header class="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
            <h1 class="text-2xl font-semibold">Sarathi </h1>
            <div class="relative">
              <button id="menuButton" class="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
                </svg>
              </button>
              
              <div id="menuDropdown" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                <ul class="py-2 px-3">
                  <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a></li>
                  <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a></li>
                  
                </ul>
              </div>
            </div>
            
          </header>
        
          
          <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Alice</h2>
                
                <p class="text-gray-600">Hoorayy!!</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Martin</h2>
                <p class="text-gray-600">That pizza place was amazing! We should go again sometime. 🍕</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Charlie</h2>
                <p class="text-gray-600">Hey, do you have any recommendations for a good movie to watch?</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">David</h2>
                <p class="text-gray-600">I just finished reading a great book! It was so captivating.</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Ella</h2>
                <p class="text-gray-600">What's the plan for this weekend? Anything fun?</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/ffc2e2/ffdbdb.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Fiona</h2>
                <p class="text-gray-600">I heard there's a new exhibit at the art museum. Interested?</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/f83f3f/4f4f4f.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">George</h2>
                <p class="text-gray-600">I tried that new cafe downtown. The coffee was fantastic!</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Hannah</h2>
                <p class="text-gray-600">I'm planning a hiking trip next month. Want to join?</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/70ff33/501616.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Ian</h2>
                <p class="text-gray-600">Let's catch up soon. It's been too long!</p>
              </div>
            </div>
            
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                <img src="https://placehold.co/200x/30916c/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Jack</h2>
                <p class="text-gray-600">Remember that hilarious joke you told me? I can't stop laughing!</p>
              </div>
            </div>
            
            
          </div>
        </div>
        
        
        <div class="flex-1">
           
            <header class="bg-white p-4 text-gray-700">
                <h1 class="text-2xl font-semibold">Alice </h1>
                
            </header>
            <div
            className={`fixed top-4 right-4 ${isChatBotVisible ? '' : 'hidden'}`}
          >
            <ChatBot />
          </div>

          {/* Button to toggle chat bot visibility */}
          <button
            className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            data-state="closed"
            onClick={toggleChatBot}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white block border-gray-200 align-middle"
            >
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
          </button>
            
           
            <div class="h-screen overflow-y-auto p-4 pb-36">
               
               <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">Hey Bob, how's it going?</p>
                 </div>
               </div>
               
               
               <div class="flex justify-end mb-4 cursor-pointer">
                 <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
               </div>
               
              
               <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">That book sounds interesting! What's it about?</p>
                 </div>
               </div>
               
               <div class="flex justify-end mb-4 cursor-pointer">
                 <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>It's about an astronaut stranded on Mars, trying to survive. Gripping stuff!</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
               </div>
               
               <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">I'm intrigued! Maybe I'll borrow it from you when you're done?</p>
                 </div>
               </div>
               
               <div class="flex justify-end mb-4 cursor-pointer">
                 <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>Of course! I'll drop it off at your place tomorrow.</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
               </div>
               
               <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">Thanks, you're the best!</p>
                 </div>
               </div>
               
               <div class="flex justify-end mb-4 cursor-pointer">
                 <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>Anytime! Let me know how you like it. 😊</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
               </div>
              
               <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">So, pizza next week, right?</p>
                 </div>
               </div>
               
               <div class="flex justify-end mb-4 cursor-pointer">
                 <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                   <p>Absolutely! Can't wait for our pizza date. 🍕</p>
                 </div>
                 <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                   <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
               </div>
               <div class="flex mb-4 cursor-pointer">
                 <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" class="w-8 h-8 rounded-full"/>
                 </div>
                 <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                   <p class="text-gray-700">Hoorayy!!</p>
                 </div>
               </div>
               
            </div>
            
            <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
                <div class="flex items-center">
                    <input type="text" placeholder="Type a message..." class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"/>
                    <button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
                </div>
            </footer>
        </div>
    </div>

    
    </div>
  );
};

export default Community;
