<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TutorialController;    
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('halo', function () {
    return "Hallo, selamat datang mahasiswa Universitas Bunda Mulia";
});

Route::get('tutorial', [TutorialController::class, 'index']);
Route::get('tutorial/{nama}', [TutorialController::class, 'uri']);
Route::get('/formulir', [TutorialController::class, 'input']);
Route::get('/formulir/proses', [TutorialController::class, 'proses']);

Route::get('/selamat', [TutorialController::class, 'selamat']);

route::get('/profile', [ProfileController::class, 'index']);

