<?php

use Illuminate\Support\Facades\Route;

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

// Auth::routes();


Route::get('/')->name('wallet')->uses('App\Http\Controllers\WalletController@index')->middleware('auth');


Route::get('login')->name('login')->uses('App\Http\Controllers\PagesController@login');
Route::get('register')->name('register')->uses('App\Http\Controllers\PagesController@register');

Route::post('register')->name('signup.attempt')->uses('App\Http\Controllers\Auth\RegisterController@register');

Route::post('login')->name('login.attempt')->uses('App\Http\Controllers\Auth\LoginController@login');

Route::post('logout')->name('logout')->uses('App\Http\Controllers\Auth\LoginController@logout');