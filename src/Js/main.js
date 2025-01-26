const toggleDarkMode = document.querySelector('#toggle-darkMode')    
const htmlTage = document.querySelector('html')

toggleDarkMode.addEventListener('click' , ()=>{
    htmlTage.classList.toggle('dark')
    if(htmlTage.classList.contains('dark')){
         toggleDarkMode.textContent = 'Dark Mode';
        toggleDarkMode.classList.replace('bg-white' , 'bg-gray-800');
        toggleDarkMode.classList.replace('text-black' , 'text-white')
    }else{
        toggleDarkMode.textContent = 'Light Mode';
        toggleDarkMode.classList.replace('bg-gray-800' , 'bg-white');
        toggleDarkMode.classList.replace('text-white' , 'text-black')
    }
})