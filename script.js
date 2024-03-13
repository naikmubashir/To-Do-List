const input=document.querySelector('#data');
        const addBtn=document.querySelector('#enter');
        const ul =document.querySelector('#slate');
        const delBtns=document.querySelectorAll('.removeBtn');
        const check=document.querySelectorAll('.h');

        check.forEach(item=>{
            item.addEventListener('click',(e)=>{
                e.currentTarget.checked == true ? e.currentTarget.nextElementSibling.style.textDecoration='line-through' : e.currentTarget.nextElementSibling.style.textDecoration='none';
                
            })
        })

        addBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            input.value.trim()===''?alert('Fill in the field!!!'):createtask(input.value);
            input.value='';
            console.log(input.value);
        });

        function createtask(data){
            const icon =document.createElement('i');
            const btn=document.createElement('button');
            const text=document.createTextNode(data);
            const div=document.createElement('div');
            const checkBox=document.createElement('input');
            const li =document.createElement('li');
            
            //appending icon in button
            icon.classList.add('fa-solid');
            icon.classList.add('fa-xmark');
            btn.classList.add('removeBtn')
            btn.classList.add('btn')
            btn.appendChild(icon);
            btn.addEventListener('click',e=>{
                e.currentTarget.parentElement.remove();
            })

            //appending text in label
            // label.setAttribute('for','cb')
            div.classList.add('items');
            div.appendChild(text);
            
            checkBox.setAttribute('type','checkbox');
            // checkBox.setAttribute('name','cb');
            checkBox.classList.add('h');
            checkBox.addEventListener('click',e=>{
                e.currentTarget.checked == true ? e.currentTarget.nextElementSibling.style.textDecoration='line-through' : e.currentTarget.nextElementSibling.style.textDecoration='none';
            })

            li.appendChild(checkBox);
            li.appendChild(div);
            li.appendChild(btn);

            ul.appendChild(li);
        }
        delBtns.forEach((item)=>{
            item.addEventListener('click',(e)=>{
                e.currentTarget.parentElement.remove();
               console.log()
               console.log(e.currentTarget)

        })
        });

        
        // const list=document.querySelector('.list');
        // const btn=document.querySelector('#btn');
        // const inp=document.querySelector('#data');
        // const removeBtn=document.querySelectorAll('.removeBtn');


        // function removee(){
        //     removeBtn.remove();
        // }
        // removeBtn.addEventListener('click',(e)=>{
        //     removee();

        // })
        // btn.addEventListener('click',(e)=>{
        //     e.preventDefault();
        //     list.innerHTML=list.innerHTML+`<li>${inp.value}</li>`
        // })