

const button = document.getElementById('btn');

const todolst = document.getElementById('todolist');


const list = document.getElementById('list');


const btn = document.getElementById("btn").addEventListener('click',clicked);
 
 
 

function clicked(){
    
  
  const del = document.createElement('button');
  del.innerHTML = "&#10062"
    
  const edit = document.createElement('button');
  edit.innerHTML = "&#128397"
  //const save = document.createElement('button');
  //save.innerText = 'save'

  let a = document.getElementById('todolist').value;
  
  const newlist = document.createElement('li');
  const label = document.createElement('label');
  label.style.width = "50%" 
  label.style.float= "left"
  const input = document.createElement('input');
  input.style.width = "50%" 
  input.style.float= "left"
  
  input.value = a
  label.innerText = a ;

  newlist.appendChild(label);
  newlist.appendChild(input)
  newlist.appendChild(del);  
  newlist.appendChild(edit);
  //newlist.appendChild(save);
  list.appendChild(newlist);
  input.style.display = 'none';
  
  
  //save.style.display = 'none';    
    
   
  //save.addEventListener('click', (e)=>{
    // input.style.display = 'none';
    // label.style.display = 'inline';
    // label.innerText = input.value;
    // save.style.display = 'none';
    // edit.style.display = 'inline';
  //})
  var count = 0;
  edit.addEventListener('click', (e) =>{
    
    // input.style.display = 'inline';
    // label.style.display = 'none';
    // //save.style.display = 'inline';
    //edit.textContent = 'edit'
    //edit.textContent = 'save';
    
    //edit.innerText = "edit"
    
        //count = false
      
    //edit.innerText = "save";
    //input.style.display = 'inline';
    //label.style.display = 'inline';
    const value = input.appendChild(label)
    //input.style.display = 'inline';
    //edit.innerHTML = "save";
    if(/*edit.innerText = "save"*/ count == 0){
       //edit.innerText = "edit";
      count = 1;
      edit.innerHTML ="&#9989"
        // label.appendChild(input)
        label.innerText = input.value ;
        input.style.display = 'inline';
        //label.style.display =="inline";
        //label = input;
  //       edit.addEventListener('click',(e)=>{
  //       edit.textContent = "edit";
  //      })
    }
    else{
      count = 0;
      label.innerText = input.value
      input.style.display = 'none';
      label.style.display = 'inline';
      //input.appendChild(label)
      //edit.addEventListener('click',(e)=>{
      edit.innerHTML = "&#128397";

      newlist.appendChild(label);
      newlist.appendChild(input)
      newlist.appendChild(del);  
      newlist.appendChild(edit);
      //newlist.appendChild(save);
      list.appendChild(newlist);

     //})

   }
   
    
    //if(edit.innerText = "save"){
      //input.style.display = 'inline';
       //label.appendChild(input.innerText);
      //label.style.display = 'none';
      //input.style.display = 'none';
      //document.getElementById('edit').innerText = "edit";
      //setTimeout(edit,10);
     
    //}
    // if(edit.innerText = "edit"){
    //   //edit.innerText = "edit";
    //   input.style.display = 'none';
    //   label.style.display = 'inline';
    //   label.innerText == input.value;
      
    // }//else {edit.innerText = "edit"}
   })
    del.addEventListener('click', (e) => {
        if(newlist !== ""){
            list.removeChild(newlist);
            list.removeChild(del);
            list.removeChild(edit);
           
       };
   })
}

   







 


