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


Route::post('/buildingList',[BuildingController::class,'buildingList']);
Route::post('/saveBuilding',[BuildingController::class,'saveBuilding']);
Route::post('/deleteBuilding/{id}',[BuildingController::class,'deleteBuilding']);

Route::post('/managerList',[ManagerController::class,'managerList']);

Route::post('/apartmentList',[ApartmentController::class,'apartmentList']);

Route::post('/buildingList',[BuildingController::class,'buildingList']);
Route::post('/saveBuilding',[BuildingController::class,'saveBuilding']);
Route::post('/deleteBuilding/{id}',[BuildingController::class,'deleteBuilding']);

Route::post('/contactusList',[ContactUsController::class,'contactusList']);
Route::post('/saveContactUs',[ContactUsController::class,'saveContactUs']);
Route::post('/deleteContactUs/{id}',[ContactUsController::class,'deleteContactUs']);

Route::post('/enabledserviceList',[EnabledServiceController::class,'enabledserviceList']);
Route::post('/saveEnabledService',[EnabledServiceController::class,'saveEnabledService']);
Route::post('/deleteEnabledService/{id}',[EnabledServiceController::class,'deleteEnabledService']);

Route::post('/gardenList',[GardenController::class,'gardenList']);
Route::post('/saveGarden',[GardenController::class,'saveGarden']);
Route::post('/deleteGarden/{id}',[GardenController::class,'deleteGarden']);

Route::post('/incidentList',[IncidentController::class,'incidentList']);
Route::post('/saveIncident',[IncidentController::class,'saveIncident']);
Route::post('/deleteIncident/{id}',[IncidentController::class,'deleteIncident']);

Route::post('/managerList',[ManagerController::class,'managerList']);
Route::post('/saveManager',[ManagerController::class,'saveManager']);
Route::post('/deleteManager/{id}',[ManagerController::class,'deleteManager']);

Route::post('/residentList',[ResidentController::class,'residentList']);
Route::post('/saveResident',[ResidentController::class,'saveResident']);
Route::post('/deleteResident/{id}',[ResidentController::class,'deleteResident']);

Route::post('/plantList',[PlantController::class,'plantList']);
Route::post('/savePlant',[PlantController::class,'savePlant']);
Route::post('/deletePlant/{id}',[PlantController::class,'deletePlant']);

Route::post('/poolList',[PoolController::class,'poolList']);
Route::post('/savePool',[PoolController::class,'savePool']);
Route::post('/deletePool/{id}',[PoolController::class,'deletePool']);

Route::post('/servicesList',[ServicesController::class,'servicesList']);
Route::post('/saveServices',[ServicesController::class,'saveServices']);
Route::post('/deleteServices/{id}',[ServicesController::class,'deleteServices']);

Route::post('/subdivisionList',[SubdivisionController::class,'subdivisionList']);
Route::post('/saveSubdivision',[SubdivisionController::class,'saveSubdivision']);
Route::post('/deleteSubdivision/{id}',[SubdivisionController::class,'deleteSubdivision']);

Route::post('/userList',[UserController::class,'userList']);
Route::post('/saveUser',[UserController::class,'saveUser']);
Route::post('/deleteUser/{id}',[UserController::class,'deleteUser']);

Route::post('/visitorList',[VisitorController::class,'visitorList']);
Route::post('/saveVisitor',[VisitorController::class,'saveVisitor']);
Route::post('/deleteVisitor/{id}',[VisitorController::class,'deleteVisitor']);



Route::post('/register', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/contactus', [\App\Http\Controllers\ContactUsController::class, 'store']);