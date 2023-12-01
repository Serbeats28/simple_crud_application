handleSubmit = () =>{
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;



   let formData = new FormData();
   formData.append("username",username);
   formData.append("password", password)
   let req = new XMLHttpRequest();
   req.open('POST','http://localhost:8000/api/login',true);
   req.onload = function(){
      if(this.status == 200){
         let response =  JSON.parse(this.responseText);
         if(response.status == 'success'){
            localStorage.setItem('isLogin', response.isLogin);
            localStorage.setItem('username', response.username);
            document.getElementById('login_page').style.display = 'none';
            document.getElementById('home_page').style.display = 'block';
         }else{
            document.getElementById('message').innerHTML = response.message
         }
      }
   }
   req.send(formData);
} 

HomePage = () =>{
  if(!localStorage.getItem('username') == '' || !localStorage.getItem('isLogin') == ''){
   document.getElementById('login_page').style.display = 'none';
   document.getElementById('home_page').style.display = 'block';
   //console.log('fuck the world')
  }else{
   //console.log('hello world')
   document.getElementById('login_page').style.display = 'block';
    document.getElementById('home_page').style.display = 'none';
  }
}

HomePage();

StudentFetch = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/fetchStudent', true);
   req.onload = function(){
      if(this.status == 200){
         let data = JSON.parse(this.responseText);
         let output = '';
         for(i in data){
            output +=`
               <tr>
                 <td>${data[i].student_id}</td>
                 <td>${data[i].email}</td>
                 <td>${data[i].full_name}</td>
                 <td>${data[i].course}</td>
                 <td>${data[i].year_level}</td>
                 <td>
                   <a href="javascript:void(0)" onclick="btnUpdate(${data[i].id})" class="text-success"
                   data-bs-toggle="modal" data-bs-target="#modalUpdateStudent" ><i class="fa-solid fa-pen-to-square"></i></a>
                 </td>
                 <td>
                  <a href="javascript:void(0)" onclick="btnRemove(${data[i].id})" class="text-danger"
                  data-bs-toggle="modal" data-bs-target="#modalRemoveStudent"><i class="fa-solid fa-trash"></i></a>
                 </td>
               </tr>
            `;
         }
         document.getElementById('fetchStudent').innerHTML = output;
      }
   }
   req.send();
}
StudentFetch();

handleCreate = () =>{
   let email = document.getElementById('email').value;
   let full_name = document.getElementById('full_name').value;
   let course = document.getElementById('course').value;
   let year = document.getElementById('year_level').value;

   if(year == '' || course == '' || full_name == '' || email == ''){
      error_message = 'All fields are required';
      document.getElementById('error_message').innerHTML = error_message
   }else{
      let btnAddStudent = document.getElementById('btnAddStudent');
      btnAddStudent.innerHTML = 'Adding....';

      let fd = new FormData();
      fd.append("email",email);
      fd.append("full_name",full_name);
      fd.append("course",course);
      fd.append("year_level",year);

      let req = new XMLHttpRequest();
      req.open('POST','http://localhost:8000/api/create',true);
      req.onload = function(){
         if(this.status == 200){
            let response = JSON.parse(this.responseText);
            if(response.status == 'success'){
               let modal = bootstrap.Modal.getOrCreateInstance('#modalAddingStudent');
               modal.hide()
               btnAddStudent.innerHTML = 'Add Student';
               alertify.set('notifier','position', 'top-right');
               alertify.success(response.message);
               document.getElementById('fetchStudent').innerHTML = '';
               StudentFetch();
               countStudent();
               countFirstYearStudent();
               countSecondYearStudent();
               countThirdYearStudent();
               countForthYearStudent();
            }else{
               btnAddStudent.innerHTML = 'Add Student';
               document.getElementById('error_message').innerHTML = response.message
            }
         }
      }
      req.send(fd);
   }
   
}

btnUpdate = (id) =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/retrieve/' + id ,true);
   req.onload = function(){
      if(this.status == 200){
         let response = JSON.parse(this.responseText);
         document.getElementById('ID').value = response.id;
         document.getElementById('student_id').value = response.student_id;
         document.getElementById('student_email').value = response.email;
         document.getElementById('student_full_name').value = response.full_name;
         document.getElementById('student_course').value = response.course;
         document.getElementById('student_year_level').value = response.year_level;
      }
   }
   req.send();
}

handleUpdate = () =>{
  let id = document.getElementById('ID').value;
  let student_id = document.getElementById('student_id').value;
  let email = document.getElementById('student_email').value;
  let full_name = document.getElementById('student_full_name').value;
  let course = document.getElementById('student_course').value;
  let year_level = document.getElementById('student_year_level').value;

  let btnUpdateStudent = document.getElementById('btnUpdateStudent');
  btnUpdateStudent.innerHTML = 'Updating....'
  let formData = new FormData();
   formData.append('id', id);
   formData.append('student_id', student_id);
   formData.append('email', email);
   formData.append('full_name', full_name);
   formData.append('course', course);
   formData.append('year_level', year_level);

   let req = new XMLHttpRequest();
   req.open('POST','http://localhost:8000/api/update',true);
   req.onload = function(){
      if(this.status == 200){
         let response = JSON.parse(this.responseText);
         if(response.status == 'success'){
           let modal = bootstrap.Modal.getOrCreateInstance('#modalUpdateStudent');
           modal.hide()
           btnUpdateStudent.innerHTML = 'Update Student'
           alertify.set('notifier','position', 'top-right');
           alertify.success(response.message);
           document.getElementById('fetchStudent').innerHTML = '';
           StudentFetch();
         }
      }
   }
   req.send(formData);
}

btnRemove = (id) =>{
   document.getElementById('studentID').value = id
}

handleRemove = () =>{
   let id = document.getElementById('studentID').value;
   let btnRemove = document.getElementById('btnRemoveStudent');
   btnRemove.innerHTML = 'Removing....'
   let req = new XMLHttpRequest();
   req.open('DELETE','http://localhost:8000/api/delete/' + id, true);
   req.onload = function(){
      if(this.status == 200){
         let response = JSON.parse(this.responseText);
         if(response.status == 'success'){
            let modal = bootstrap.Modal.getOrCreateInstance('#modalRemoveStudent');
            modal.hide();
            btnRemove.innerHTML = 'Remove Student';
            alertify.set('notifier','position', 'top-right');
            alertify.success(response.message);
            document.getElementById('fetchStudent').innerHTML = '';
            StudentFetch();
         }
      }
   }
   req.send();
}

countStudent = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/count',true);
   req.onload = function(){
      if(this.status == 200){
         let response = JSON.parse(this.responseText);
         document.getElementById('all_student').innerHTML = response.student
      }
   }
   req.send();
}
countStudent();

countFirstYearStudent = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/countFirstYear',true);
   req.onload = function(){
      if(this.status == 200){
        let response = JSON.parse(this.responseText);
        document.getElementById('first_year').innerHTML = response.first_year
      }
   }
   req.send();
}
countFirstYearStudent();

countSecondYearStudent = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/countSecondYear',true);
   req.onload = function(){
      if(this.status == 200){
        let response = JSON.parse(this.responseText);
       document.getElementById('second_year').innerHTML = response.second_year
      }
   }
   req.send();
}
countSecondYearStudent();

countThirdYearStudent = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/countThirdYear',true);
   req.onload = function(){
      if(this.status == 200){
        let response = JSON.parse(this.responseText);
       document.getElementById('third_year').innerHTML = response.third_year
      }
   }
   req.send();
}
countThirdYearStudent();


countForthYearStudent = () =>{
   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/countForthYear',true);
   req.onload = function(){
      if(this.status == 200){
        let response = JSON.parse(this.responseText);
       document.getElementById('forth_year').innerHTML = response.forth_year
      }
   }
   req.send();
}
countForthYearStudent();


btnFirstYear = () =>{
   document.getElementById('home_section').style.display = 'none';
   document.getElementById('firstYear_section').style.display = 'block'

   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/firstYear',true);
   req.onload = function(){
      if(this.status == 200){
         let data = JSON.parse(this.responseText);
         let output = '';
         for(i in data){
            output += `
             <tr>
               <td>${data[i].student_id}</td>
               <td>${data[i].email}</td>
               <td>${data[i].full_name}</td>
               <td>${data[i].course}</td>
               <td>${data[i].year_level}</td>
             </tr>`;
         }
         document.getElementById('fetchFirstYearStudent').innerHTML = output;
      }
   }
   req.send();
}


btnSecondYear = () =>{
   document.getElementById('home_section').style.display = 'none';
   document.getElementById('secondYear_section').style.display = 'block'

   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/secondYear',true);
   req.onload = function(){
      if(this.status == 200){
         let data = JSON.parse(this.responseText);
         let output = '';
         for(i in data){
            output += `
             <tr>
               <td>${data[i].student_id}</td>
               <td>${data[i].email}</td>
               <td>${data[i].full_name}</td>
               <td>${data[i].course}</td>
               <td>${data[i].year_level}</td>
             </tr>`;
         }
         document.querySelector('#fetchSecondYearStudent').innerHTML = output;
      }
   }
   req.send();
}

btnThirdYear = () =>{
   document.getElementById('home_section').style.display = 'none';
   document.getElementById('thirdYear_section').style.display = 'block'

   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/thirdYear',true);
   req.onload = function(){
      if(this.status == 200){
         let data = JSON.parse(this.responseText);
         let output = '';
         for(i in data){
            output += `
             <tr>
               <td>${data[i].student_id}</td>
               <td>${data[i].email}</td>
               <td>${data[i].full_name}</td>
               <td>${data[i].course}</td>
               <td>${data[i].year_level}</td>
             </tr>`;
         }
         document.querySelector('#fetchThirdYearStudent').innerHTML = output;
      }
   }
   req.send();
}

btnForthYear = () =>{
   document.getElementById('home_section').style.display = 'none';
   document.getElementById('forthYear_section').style.display = 'block'

   let req = new XMLHttpRequest();
   req.open('GET','http://localhost:8000/api/forthYear',true);
   req.onload = function(){
      if(this.status == 200){
         let data = JSON.parse(this.responseText);
         let output = '';
         for(i in data){
            output += `
             <tr>
               <td>${data[i].student_id}</td>
               <td>${data[i].email}</td>
               <td>${data[i].full_name}</td>
               <td>${data[i].course}</td>
               <td>${data[i].year_level}</td>
             </tr>`;
         }
         document.querySelector('#fetchForthYearStudent').innerHTML = output;
      }
   }
   req.send();
}

btnLogout = () =>{
   localStorage.removeItem('isLogin');
   localStorage.removeItem('username');
   window.location.reload();
   HomePage();
}