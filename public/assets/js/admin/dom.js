let adminLoginPage = '';

adminLoginPage += `
<div class="d-flex flex-column mt-5 justify-content-center align-items-center adminLoginForm">
<div class="container  adminForm">
    <div class="row">
        <div class="card">
            <div class="card-header bg-white">
                <h3 class="text-center text-uppercase fw-bold mt-2">Admin Login</h3>
            </div>
            <form action="javascript:void(0)" id="adminForm" onsubmit="handleSubmit(this)">
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <span class="text-center text-danger fw-bold" id="message"></span>
                </div>
              </div>
               <div class="mt-2">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" name="username" id="username" placeholder="Username">
               </div>
               <div class="mt-2">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password">
             </div>
             <div class="mt-2">
                <button type="submit" class="btn btn-primary w-100">Login</button>
             </div>
            </div>
            </form>
         </div>
    </div>
</div>
</div>
`;
document.getElementById('adminLoginPage').innerHTML = adminLoginPage;


btnHome = () =>{
   document.getElementById('home_section').style.display = 'block'
   document.getElementById('student_section').style.display = 'none'
   document.getElementById('firstYear_section').style.display = 'none'
   document.getElementById('secondYear_section').style.display = 'none'
   document.getElementById('thirdYear_section').style.display = 'none'
   document.getElementById('forthYear_section').style.display = 'none'
}

btnStudent = () =>{
   document.getElementById('home_section').style.display = 'none'
   document.getElementById('student_section').style.display = 'block'
   document.getElementById('firstYear_section').style.display = 'none'
   document.getElementById('secondYear_section').style.display = 'none'
   document.getElementById('thirdYear_section').style.display = 'none'
   document.getElementById('forthYear_section').style.display = 'none'
}

btnRecord = () =>{
   document.getElementById('home_section').style.display = 'none'
   document.getElementById('student_section').style.display = 'block'
}

btnBack = () =>{
   document.getElementById('home_section').style.display = 'block'
   document.getElementById('student_section').style.display = 'none'
   document.getElementById('firstYear_section').style.display = 'none'
   document.getElementById('secondYear_section').style.display = 'none'
   document.getElementById('thirdYear_section').style.display = 'none'
   document.getElementById('forthYear_section').style.display = 'none'
}


let homeSection = '';
homeSection += `
<div class="container mt-3">
  <div class="row">
     <h3 class="text-center text-uppercase mb-4">Admin Panel</h3>
     <div class="grid">
     <div class="card card-grid" style="width: 18rem;">
       <div class="card-header bg-secondary">
         <h5 class="fw-bold text-center text-uppercase text-white mt-2">Students</h5>
       </div>
       <div class="card-body">
          <div class="text-center pt-2">
            <span class="fw-bold fs-4 text-white-25 text-dark">All Student :</span> <span class="fw-bold fs-4 text-white-25 text-dark"
            id="all_student"></span>
            <hr>
            <a href="javascript:void(0)" onclick="btnRecord()" class="btn btn-primary">View Record</a>
          </div>
       </div>
     </div>

     <div class="card card-grid" style="width: 18rem;">
       <div class="card-header bg-primary">
         <h5 class="fw-bold text-center text-uppercase text-white mt-2">First Year</h5>
       </div>
       <div class="card-body">
          <div class="text-center pt-2">
            <span class="fw-bold fs-4 text-white-25 text-dark">1st Year Student :</span> <span class="fw-bold fs-4 text-white-25 text-dark"
            id="first_year"></span>
            <hr>
            <a href="javascript:void(0)" onclick="btnFirstYear()" class="btn btn-primary">View Record</a>
          </div>
       </div>
     </div>

     <div class="card card-grid" style="width: 18rem">
       <div class="card-header bg-info">
         <h5 class="fw-bold text-center text-uppercase text-white mt-2">Second Year</h5>
       </div>
       <div class="card-body">
          <div class="text-center pt-2">
            <span class="fw-bold fs-4 text-white-25 text-dark">2nd Year Student :</span> <span class="fw-bold fs-4 text-white-25 text-dark"
            id="second_year"></span>
            <hr>
            <a href="javascript:void(0)" onclick="btnSecondYear()" class="btn btn-primary">View Record</a>
          </div>
       </div>
     </div>

     <div class="card card-grid" style="width: 18rem">
       <div class="card-header bg-dark">
         <h5 class="fw-bold text-center text-uppercase text-white mt-2">Third Year</h5>
       </div>
       <div class="card-body">
          <div class="text-center pt-2">
            <span class="fw-bold fs-4 text-white-25 text-dark">3rd Year Student :</span> <span class="fw-bold fs-4 text-white-25 text-dark"
            id="third_year"></span>
            <hr>
            <a href="javascript:void(0)" onclick="btnThirdYear()" class="btn btn-primary">View Record</a>
          </div>
       </div>
     </div>

     <div class="card card-grid" style="width: 18rem">
       <div class="card-header bg-success">
         <h5 class="fw-bold text-center text-uppercase text-white mt-2">Forth Year</h5>
       </div>
       <div class="card-body">
          <div class="text-center pt-2">
            <span class="fw-bold fs-4 text-white-25 text-dark">4th Year Student :</span> <span class="fw-bold fs-4 text-white-25 text-dark"
            id="forth_year"></span>
            <hr>
            <a href="javascript:void(0)" onclick="btnForthYear()" class="btn btn-primary">View Record</a>
          </div>
       </div>
     </div>

     </div>
  </div>
</div>
`;

document.getElementById('home_section').innerHTML = homeSection;

let studentSection = '';
studentSection += `
<div class="container mt-3 w-75">
  <div class="row">
     <h3 class="text-center text-uppercase">Student Record</h3>
     <div class="card">
      <div class="card-header">
         <button class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#modalAddingStudent">Add Student</button>
      </div>
      <div class="card-body">
         <table class="table table-striped">
          <thead>
            <th>Student #</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Year Level</th>
            <th>Update</th>
            <th>Remove</th>
          </thead>
          <tbody id="fetchStudent"></tbody>
         </table>
      </div>
     </div>
  </div>
</div>
`;

document.getElementById('student_section').innerHTML = studentSection;


let modalContent = '';
modalContent += `
<form action="javascript:void(0)" id="addStudentForm" onsubmit="handleCreate(this)">
<div class="modal-header">
   <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel">Add Student</h1>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
   <div class="modal-body">
      <div class="container">
       <div class="row">
         <span class="text-danger fw-bold text-center" id="error_message"></span>
       </div>
      </div>
      <div class="mt-2">
         <label for="email">Student Email</label>
         <input type="text" class="form-control" id="email" name="email" placeholder="Student Email">
      </div>

      <div class="mt-2">
         <label for="full_name">Full name</label>
         <input type="text" class="form-control" id="full_name" name="full_name" placeholder="Full Name">
      </div>

      <div class="mt-2">
         <label for="course">Student Course</label>
         <select class="form-select" aria-label="Default select example" id="course">
            <option selected></option>
            <option value="BSIT"> BSIT</option>
            <option value="BSED"> BSED</option>
            <option value="BSBA"> BSBA</option>
            <option value="BSHRM"> BSHRM</option>
         </select>
      </div>

      <div class="mt-2">
         <label for="year_level">Year Level</label>
         <select class="form-select" aria-label="Default select example" id="year_level">
            <option selected></option>
            <option value="First year"> First year</option>
            <option value="Second year"> Second year</option>
            <option value="Third year"> Third year</option>
            <option value="Forth year"> Forth year</option>
         </select>
      </div>
   </div>
<div class="modal-footer">
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   <button type="submit" class="btn btn-primary" id="btnAddStudent">Add Student</button>
</div>
</form>
`;
document.getElementById('modalContent').innerHTML = modalContent;

let modalUpdateContent = '';
modalUpdateContent += `
<form action="javascript:void(0)" id="UpdateStudentForm" onsubmit="handleUpdate(this)">
<div class="modal-header">
   <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel">Update Student</h1>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
   <div class="modal-body">
   <div class="container">
   <div class="row">
     <span class="text-danger fw-bold text-center" id="error_message"></span>
   </div>
  </div>
  
  <div class="mt-2">
     <input type="hidden" id="ID" name="ID">
     <label for="student_id">Student #</label>
     <input type="text" class="form-control" id="student_id" name="student_id" >
  </div>

  <div class="mt-2">
     <label for="student_email">Student Email</label>
     <input type="text" class="form-control" id="student_email" name="student_email" >
  </div>

  <div class="mt-2">
     <label for="student_full_name">Full name</label>
     <input type="text" class="form-control" id="student_full_name" name="student_full_name">
  </div>

  <div class="mt-2">
     <label for="student_course">Student Course</label>
     <input class="form-control" id="student_course" name="student_course">
  </div>

  <div class="mt-2">
     <label for="student_year_level">Year Level</label>
     <input class="form-control" id="student_year_level" name="student_year_level">
  </div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="submit" class="btn btn-primary" id="btnUpdateStudent">Update Student</button>
</div>
</form>
`; 
document.getElementById('modalUpdateContent').innerHTML = modalUpdateContent;



let modalRemoveContent = '';
modalRemoveContent += `
<form action="javascript:void(0)" id="RemoveStudentForm" onsubmit="handleRemove(this)">
<div class="modal-header">
   <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel">Remove Student</h1>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
   <div class="modal-body">
      <input type="hidden" id="studentID" name="studentID">
      <span class="text-danger text-center fw-bold fs-5">Are you sure? You want to remove this student</span>
   </div>
<div class="modal-footer">
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   <button type="submit" class="btn btn-danger" id="btnRemoveStudent">Remove Student</button>
</div>
</form>
`;

document.getElementById('modalRemoveContent').innerHTML = modalRemoveContent;


let FirstYear_section = '';
FirstYear_section += `
<div class="container mt-3 w-75">
  <div class="row">
     <h3 class="text-center text-uppercase">First Year Student Record</h3>
     <div class="card">
      <div class="card-header">
         <button type="button" class="btn btn-danger float-end" onclick="btnBack()">Back</button>
      </div>
      <div class="card-body">
         <table class="table table-striped">
          <thead>
            <th>Student #</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Year Level</th>
          </thead>
          <tbody id="fetchFirstYearStudent"></tbody>
         </table>
      </div>
     </div>
  </div>
</div>
`;
document.getElementById('firstYear_section').innerHTML = FirstYear_section;

let secondYear_section = '';
secondYear_section += `
<div class="container mt-3 w-75">
  <div class="row">
     <h3 class="text-center text-uppercase">Second Year Student Record</h3>
     <div class="card">
      <div class="card-header">
         <button type="button" class="btn btn-danger float-end" onclick="btnBack()">Back</button>
      </div>
      <div class="card-body">
         <table class="table table-striped">
          <thead>
            <th>Student #</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Year Level</th>
          </thead>
          <tbody id="fetchSecondYearStudent"></tbody>
         </table>
      </div>
     </div>
  </div>
</div>
`;
document.getElementById('secondYear_section').innerHTML = secondYear_section;


let thirdYear_section = '';
thirdYear_section += `
<div class="container mt-3 w-75">
  <div class="row">
     <h3 class="text-center text-uppercase">Third Year Student Record</h3>
     <div class="card">
      <div class="card-header">
         <button type="button" class="btn btn-danger float-end" onclick="btnBack()">Back</button>
      </div>
      <div class="card-body">
         <table class="table table-striped">
          <thead>
            <th>Student #</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Year Level</th>
          </thead>
          <tbody id="fetchThirdYearStudent"></tbody>
         </table>
      </div>
     </div>
  </div>
</div>
`;
document.getElementById('thirdYear_section').innerHTML = thirdYear_section;

let forthYear_section = '';
forthYear_section += `
<div class="container mt-3 w-75">
  <div class="row">
     <h3 class="text-center text-uppercase">Forth Year Student Record</h3>
     <div class="card">
      <div class="card-header">
         <button type="button" class="btn btn-danger float-end" onclick="btnBack()">Back</button>
      </div>
      <div class="card-body">
         <table class="table table-striped">
          <thead>
            <th>Student #</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Year Level</th>
          </thead>
          <tbody id="fetchForthYearStudent"></tbody>
         </table>
      </div>
     </div>
  </div>
</div>
`;
document.getElementById('forthYear_section').innerHTML = forthYear_section;