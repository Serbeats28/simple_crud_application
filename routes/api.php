<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login',[AdminController::class, 'login']);
Route::post('/create',[AdminController::class,'create']);
Route::get('/fetchStudent',[AdminController::class, 'fetchStudent']);
Route::get('/retrieve/{id}',[AdminController::class, 'retrieve']);
Route::post('/update',[AdminController::class,'update']);
Route::delete('/delete/{id}',[AdminController::class,'delete']);
Route::get('/count',[AdminController::class, 'count']);
Route::get('/countFirstYear',[AdminController::class,'countFirstYear']);
Route::get('/countSecondYear',[AdminController::class,'countSecondYear']);
Route::get('/countThirdYear',[AdminController::class,'countThirdYear']);
Route::get('/countForthYear',[AdminController::class,'countForthYear']);
Route::get('/firstYear',[AdminController::class,'firstYear']);
Route::get('/secondYear',[AdminController::class,'secondYear']);
Route::get('/thirdYear',[AdminController::class,'thirdYear']);
Route::get('/forthYear',[AdminController::class,'forthYear']);