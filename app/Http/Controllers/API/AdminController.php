<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdminModel;
use App\Models\StudentModel;
class AdminController extends Controller
{
    function login(Request $request){
      $adminModel = new AdminModel();
      $data = [
        'username'=>$request->input('username'),
        'password'=>$request->input('password')
      ];
      $validate = $adminModel->where($data)->count();

      if($validate > 0){
        $username = $request->input('username');
        $adminData = $adminModel->where('username',$username)->get();
        foreach($adminData as $row){
          $username = $row['username'];
        }
         return response()->json([
          'status'=>'success',
          'username'=>$username,
          'isLogin'=>'TRUE'
         ]);
      }else{
         return response()->json([
            'status'=>'error',
            'message'=>'Wrong Credential'
         ]);
      }
    }

    function create(Request $request){
      $student = new StudentModel();
      $validate = $student->where('email', $request->input('email'))->count();
      if($validate > 0){
        return response()->json([
          'status'=>'error',
          'message'=>'This Student is already added'
        ]);
      }else{
        $rand = rand(000000,999999);
        $student_id = '2023'.$rand;
        $data = [
          'student_id'=>$student_id,
          'email'=>$request->input('email'),
          'full_name'=>$request->input('full_name'),
          'course'=>$request->input('course'),
          'year_level'=>$request->input('year_level')
        ];

        $student->create($data);
        return response()->json([
          'status'=>'success',
          'message'=>'Student Added Successfully'
        ]);
      }
    }

    function fetchStudent(Request $request){
      $student = StudentModel::all();
      return response()->json($student);
    }

    function retrieve($id){
      $data = StudentModel::find($id);
      return response()->json($data);
    }

    function update(Request $request){
      $student = StudentModel::find($request->input('id'));
      $data = [
        'student_id'=>$request->input('student_id'),
        'email'=>$request->input('email'),
        'full_name'=>$request->input('full_name'),
        'course'=>$request->input('course'),
        'year_level'=>$request->input('year_level')
      ];
      $student->update($data);
      return response()->json([
        'status'=>'success',
        'message'=>'Updated Successfully'
      ]);
    }

    function delete($id){
       StudentModel::find($id)->delete();
       return response()->json([
        'status'=>'success',
        'message'=>'Remove Successfully'
       ]);

    }

    function count(){
      $student['student'] = StudentModel::all()->count();
      return response()->json($student);
    }

    function countFirstYear(){
      $student = new StudentModel();
      $firstYear['first_year'] = $student->where('year_level','First year')->count();
      return response()->json($firstYear);
    }

    function countSecondYear(){
      $student = new StudentModel();
      $secondYear['second_year'] = $student->where('year_level','Second year')->count();
      return response()->json($secondYear);
    }

    function countThirdYear(){
      $student = new StudentModel();
      $thirdYear['third_year'] = $student->where('year_level','Third year')->count();
      return response()->json($thirdYear);
    }

    function countForthYear(){
      $student = new StudentModel();
      $forthYear['forth_year'] = $student->where('year_level','Forth year')->count();
      return response()->json($forthYear);
    }
    
    function firstYear(){
      $student = new StudentModel();
      $firstYear = $student->where('year_level','First Year')->get();
      return response()->json($firstYear);
    }

    function secondYear(){
      $student = new StudentModel();
      $secondYear = $student->where('year_level','Second Year')->get();
      return response()->json($secondYear);
    }

    function thirdYear(){
      $student = new StudentModel();
      $thirdYear = $student->where('year_level','Third Year')->get();
      return response()->json($thirdYear);
    }


    function forthYear(){
      $student = new StudentModel();
      $forthYear = $student->where('year_level','Forth Year')->get();
      return response()->json($forthYear);
    }
    
    
    
}
