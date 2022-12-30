var m = 0;
let n = 0;
document.querySelector('.fa-paper-plane').addEventListener('click', () => {
    const popUp = `<div id="pop-up">
    <header>
      <p id="para-part-2">Add new list</header></p>
    </header>
    <section>
        <div id="input-div">
      <form>
         <input type="text" placeholder="Enter text to add list" id="todo-input">
      </form>
        </div>
    </section>
    <footer>
      <div id="pop-up-btn">
        <div style="margin-left:2em">
          <button class="btn" id="add-btn">Add</button>
      </div>
      <div style="margin-right:2em">
        <button class="btn" id="close-btn">Close</button>
      </div>
    </div>
    </footer>
</div>`

document.querySelector('#pop-up-index').innerHTML = popUp;

// making todo lists
todo = ` <div class="list-pop-up-div">
<header id="input-head">
    <p class="para-head"></p><hr />
</header>
      <div id="lists" class="markdone">
          
      </div>
<div id="flex-awesome">

<i class="fa-solid fa-circle-plus"></i>
  <i class="fa-solid fa-trash-can"></i>
  
</div>
</div>`

paraClick = ` <header>
<div id="top-div">
  <div id="heading">
    <h1>Tasks List</h1>
  </div>
  <div id="awesome-btn">
    <p id="para">Add items</p>
    <i class="fa-solid fa-paper-plane"></i>
    
  </div>
</div>
</header>`

// add pop - up
  document.querySelector('#add-btn').addEventListener('click', () => {
    valueInput = document.querySelector('#todo-input').value


    document.querySelector('.lists-div').innerHTML += todo;
    let arr = document.querySelectorAll('.para-head');
    do {
      arr[m].textContent = valueInput;
      m++
      document.querySelector('#pop-up').style.visibility = "hidden";
    }while(false);


  // making para click container
    paraBox = `<div class="para-click">
    <header>
      <div id="top-div">
  
        <div id="heading">
        <i class="fa-solid fa-bomb"></i>
          <h1 id="back-heading">Back</h1>
        </div>
  
          <p class="card-chosen"></p>
  
        <div id="awesome-btn">
          <p id="para">Add items</p>
          
          <i class="fa-solid fa-paper-plane" id="fa-paper-plane"></i>
         
        </div>
  
      </div>
    </header>
    
   </div> `

    let helloMe = document.querySelector('#hello-me');
    let know = document.querySelectorAll('.list-pop-up-div')
    let specialCard = document.querySelector('#special-card');

    for(let para = 0; para < arr.length; para++) {

      arr[para].addEventListener('click', () => {
        helloMe.innerHTML = paraBox;
        document.querySelector('.lists-div').style.display = "none"
        document.querySelector('#part-1-header').style.display = "none"
        document.querySelector('#special-card').appendChild(know[para])
        document.querySelector('.card-chosen').textContent = arr[para].textContent
     
    
 // back - btn
      document.querySelector('.fa-bomb').addEventListener('click', () => {
        document.querySelector('.lists-div').style.display = "flex"
        document.querySelector('#part-1-header').style.display = "inherit"
        document.querySelector('#hello-me').style.display = "none"
        document.querySelector('.lists-div').appendChild(specialCard);
        
     }); 

  
     // fa-paper-plane for adding (button)
     document.querySelector('#fa-paper-plane').addEventListener('click', () => {
      document.querySelector('#pop-up-index').innerHTML = popUp;

      
      // add
      document.querySelector('#add-btn').addEventListener('click', () => {
        
          ++m;
        document.querySelector('.lists-div').innerHTML += todo
        document.querySelector('.lists-div').style.display = "flex"
        document.querySelector('#part-1-header').style.display = "inherit"
        document.querySelector('#hello-me').style.display = "none"
        document.querySelector('#pop-up').style.visibility = "hidden"
        document.querySelector('.lists-div').appendChild(specialCard);
        console.log(m);
        var g =document.querySelectorAll(`.para-head`);
        console.log(g[m-2])
        g[m-2].textContent = document.querySelector('#todo-input').value
        
      }); // add end


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });  // close end


   }); // fa-paper-plane for adding (button end)


     }); // para-click end


    }     // for loop ends


    // add task
    let addBtn = document.querySelectorAll('.fa-circle-plus');
    let addTask = document.querySelector('#pop-up-index');
    let addItemDiv = document.querySelectorAll('.markdone')

   for(let k = 0; k<arr.length; k++) {
    addBtn[k].addEventListener('click', () => {
      addTask.innerHTML = popUp;
      document.querySelector('#para-part-2').textContent = "Add New Items"

      // add
      document.querySelector('#add-btn').addEventListener('click', () => {

        addItemDiv[k].innerHTML += '<p class="lists"></p><button class="list-btn">mark done</button><br />'
        let addItem = document.querySelectorAll('.lists')
        let markDoneBtn = document.querySelectorAll('.list-btn')

      for(let a = 0; a < addItem.length; a++) {
        document.querySelector('#pop-up').style.visibility = "hidden";
        addItem[n].textContent = document.querySelector('#todo-input').value 
        markDoneBtn[a].style.visibility = "visible";

        markDoneBtn[a].addEventListener('click', () => {
          addItem[a].style.textDecoration = "line-through";
          markDoneBtn[a].style.display = "none";
          });

      }
          n++

      });


      // close
      document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('#pop-up').style.visibility = "hidden";
      });
});

   }


  // removing container task
    let deleteBtn = document.querySelectorAll('.fa-trash-can');
    let remove = document.querySelectorAll('.list-pop-up-div');

   for(let x = 0; x<arr.length; x++) {
    deleteBtn[x].addEventListener('click', () => {
       remove[x].style.display = "none";
   });
   
   }
      
});


// close pop-up
document.querySelector('#close-btn').addEventListener('click', () => {
  document.querySelector('#pop-up').style.visibility = "hidden";
});
})