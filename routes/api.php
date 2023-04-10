<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;

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
 
 
Route::get('/main',[App\Http\Controllers\ChannelController::class, 'index']);
 
Route::post('/add',[App\Http\Controllers\ChannelController::class, 'store']);
 
Route::put('/edit/{name}',[App\Http\Controllers\ChannelController::class, 'update']);
 
Route::delete('/delete/{name}',[App\Http\Controllers\ChannelController::class, 'destroy']);
 
 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});