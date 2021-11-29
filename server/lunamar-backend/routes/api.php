<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BuildingController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\EnabledServiceController;
use App\Http\Controllers\GardenController;
use App\Http\Controllers\IncidentController;

use App\Http\Controllers\PlantController;
use App\Http\Controllers\PooltController;
use App\Http\Controllers\ResidentController;

use App\Http\Controllers\RoleController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SubdivisionController;
use App\Http\Controllers\VisitorController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[UserController::class,'register']);

Route::post('/buildingList',[BuildingController::class,'buildingList']);

Route::post('/saveBuilding',[BuildingController::class,'saveBuilding']);

Route::post('/managerList',[BuildingController::class,'managerList']);

Route::post('/apartmentList',[ApartmentController::class,'apartmentList']);
