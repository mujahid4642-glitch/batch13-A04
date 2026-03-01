let interviewList =[]
let rejectedList = []
let currentstatus = 'all'


let total = document.getElementById("total-count")
let interviewcount = document.getElementById("interview-count")
let rejectedcount = document.getElementById("rejected-count")


const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const allcardsection = document.getElementById('allcard')
const maincontiner=document.querySelector('main')
const filterSection = document.getElementById('filter-section')



function calculatercount(){
    total.innerText= allcardsection.children.length
    interviewcount.innerText=interviewList.length
    rejectedcount.innerText=rejectedList.length
}
calculatercount()



function toggles(id){
   allFilterBtn.classList.remove('bg-blue-500' ,'text-white') 
   interviewFilterBtn.classList.remove('bg-blue-500','text-white') 
   rejectedFilterBtn.classList.remove('bg-blue-500','text-white')

   allFilterBtn.classList.remove('bg-white' ,'text-black') 
   interviewFilterBtn.classList.remove('bg-white','text-black') 
   rejectedFilterBtn.classList.remove('bg-white','text-black') 

   const seleceted = document.getElementById(id)
     currentstatus = id
     console.log(currentstatus);

        // adding blue current button
    seleceted.classList.remove('bg-white','text-black')
    seleceted.classList.add('bg-blue-500','text-white')

    if(id == 'interview-filter-btn'){
        allcardsection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        render()
    } else if(id == "all-filter-btn"){
        allcardsection.classList.remove('hidden')
        filterSection.classList.add('hidden')
    } else if(id == 'rejected-filter-btn'){
        allcardsection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderrejected()
    }
    
}

maincontiner.addEventListener('click',function(event){
 
    console.log(event.target.classList.contains('interview-btn'));

            //  interview btn 
    if (event.target.classList.contains('interview-btn')){
 console.log('interview');
    const parentnode= event.target.parentNode.parentNode 
    

    const mobileCorp= parentnode.querySelector(`.mobile-corp`).innerText
    const mobileResct= parentnode.querySelector(`.mobile-resct`).innerText
    const remotElement= parentnode.querySelector(`.remotelement`).innerText
    const fullElementt= parentnode.querySelector(`.fullelement`).innerText
    const Aelement = parentnode.querySelector(`.numberelementA`).innerText
    const Belement= parentnode.querySelector(`.numberelementB`).innerText 
    const notApplied= parentnode.querySelector(`.notapplied`).innerText 
     
    parentnode.querySelector(`.notapplied`).innerText ='interview'
     
    
    
    const cardinfo1 ={
        mobileCorp,
        mobileResct,
        remotElement,
        fullElementt,
        Aelement,
        notApplied:'interview',
        Belement,
       
    }
   

    const mobileExist = interviewList .find(item=> item.mobileCorp == cardinfo1.mobileCorp)
    
    if( !mobileExist){
        interviewList.push(cardinfo1)  
        
    }
    rejectedList =rejectedList.filter(item=> item.mobileCorp != cardinfo1.mobileCorp)

    

    if(currentstatus =="rejected-filter-btn"){
        console.log(currentstatus);
       renderrejected()
     }

     calculatercount()

       } 

            //   rejected btn 
        else if (event.target.classList.contains('rejected-btn')){

    const parentnode= event.target.parentNode.parentNode 
    

    const mobileCorp= parentnode.querySelector(`.mobile-corp`).innerText
    const mobileResct= parentnode.querySelector(`.mobile-resct`).innerText
    const remotElement= parentnode.querySelector(`.remotelement`).innerText
    const fullElementt= parentnode.querySelector(`.fullelement`).innerText
    const Aelement = parentnode.querySelector(`.numberelementA`).innerText
    const Belement= parentnode.querySelector(`.numberelementB`).innerText 
    const notApplied= parentnode.querySelector(`.notapplied`).innerText 
     
    parentnode.querySelector(`.notapplied`).innerText ='rejected'
     
    
    
    const cardinfo1 ={
        mobileCorp,
        mobileResct,
        remotElement,
        fullElementt,
        Aelement,
        notApplied:'rejected',
        Belement,
       
    }
   

    const mobileExist = rejectedList .find(item => item.mobileCorp ==cardinfo1.mobileCorp)
    
    if(!mobileExist){
        rejectedList.push(cardinfo1)

        
    }
    

     interviewList = interviewList.filter(item => item.mobileCorp !=cardinfo1.mobileCorp)

     if(currentstatus =="interview-filter-btn"){
       render()
     }
    console.log(currentstatus);

    calculatercount()

       } 

   
       
})
       
           
     



//    interview function
function render (){
    filterSection.innerHTML =''

    for ( let ineterviwe of interviewList){
        console.log(ineterviwe);

        let div= document.createElement ('div')
        div.className ='card flex justify-between p-5'
        div.innerHTML = `
         <div class="space-y-6">
              <!-- part 1 -->
              <div>
                <p class="mobile-corp font-extralight">${ineterviwe.mobileCorp}</p>
                <p class="mobile-resct font-extralight">
                  React Native Developer
                </p>
              </div>
              <!-- part 2 -->
              <div class="flex">
                <p class="remotelement font-extralight">Remote</p>
                <p class="fullelement font-extralight">•Full-time</p>
                <p class="numberelementA font-extralight">•$130,000</p>
                <p class="numberelementB font-extralight">-$175,000</p>
              </div>
              <!-- part 3 -->
              <p class="notapplied font-medium">${ineterviwe.notapplied }</p>
              <p class="font-extralight">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
              </p>

              <div class="">
                <button class="interview-btn text-green-400 py-3 px-3 gap-2">
                  interview
                </button>
                <button
                  class="rejected-btn border-red-400 text-red-400 py-3 px-3"
                >
                  Rejected
                </button>
              </div>
            </div>
        `
       filterSection.appendChild(div) 

       
        
    }
}

        // rejectedList function
function renderrejected (){
    filterSection.innerHTML =''
  console.log(rejectedList);
    for ( let rejected of rejectedList){
        console.log(rejected);

        let div= document.createElement ('div')
        div.className ='card flex justify-between p-5'
        div.innerHTML = `
        <div class="space-y-6">
              <!-- part 1 -->
              <div>
                <p class="mobile-corp font-extralight">${rejected.mobileCorp}</p>
                <p class="mobile-resct font-extralight">
                  React Native Developer
                </p>
              </div>
              <!-- part 2 -->
              <div class="flex">
                <p class="remotelement font-extralight">Remote</p>
                <p class="fullelement font-extralight">•Full-time</p>
                <p class="numberelementA font-extralight">•$130,000</p>
                <p class="numberelementB font-extralight">-$175,000</p>
              </div>
              <!-- part 3 -->
              <p class="notapplied font-medium">${rejected.notapplied }</p>
              <p class="font-extralight">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
              </p>

              <div class="">
                <button class="interview-btn text-green-400 py-3 px-3 gap-2">
                  interview
                </button>
                <button
                  class="rejected-btn border-red-400 text-red-400 py-3 px-3"
                >
                  Rejected
                </button>
              </div>
            </div>
        `
       filterSection.appendChild(div) 

       
        
    }
}


