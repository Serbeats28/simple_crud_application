document.querySelector('#btnSideBarOpen').addEventListener('click',()=>{
    document.querySelector('#sideBar').style.width = '250px'
 });
 document.querySelector('#btnSideBarClose').addEventListener('click',()=>{
     document.querySelector('#sideBar').style.width = '0'
 });

 //Button Function for Dom
 sideBarRegisterBtn = () =>{
    document.getElementById('loginPages').style.display = 'none';
    document.getElementById('registerPages').style.display = "";
 }

 sideBarLoginBtn = () =>{
    document.getElementById('loginPages').style.display = '';
    document.getElementById('registerPages').style.display = "none";
 }

 let loginPage = '';
loginPage += `
  <div class="container mt-3 loginForm">
     <div class="row">
       <div class="card">
        <div class="card-header bg-white">
           <h4 class="fw-bold text-uppercase mt-2 text-center text-success fs-3">Login</h4>
        </div>
        <div class="card-body">
         <div class="mt-2">
         <label for="employee_id">Employee ID</label>
         <input type="text" class="form-control" name="employee_id" id="employee_id" placeholder="Employee ID">
         </div>
         <div class="mt-2">
         <label for="password">Password</label>
         <input type="text" class="form-control" name="password" id="password" placeholder="Password">
         </div>
         <div class="mt-2">
           <button class="btn btn-primary w-100">Login</button>
         </div>
        </div>
       </div>
     </div>
  </div>
`;

document.getElementById('loginPages').innerHTML = loginPage;