<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LanguageController;

use App\Http\Controllers\AgeGroupController;
use App\Http\Controllers\AlcoholController;
use App\Http\Controllers\BabysittingDutieController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\CriminalController;
use App\Http\Controllers\DiagnoseController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\EmploymentController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\HourlyPaymentController;
use App\Http\Controllers\HousekeeperDutieController;
use App\Http\Controllers\HousekeeperPreferenceController;
use App\Http\Controllers\HousekeeperTypeOfWorkController;
use App\Http\Controllers\JobOptionController;
use App\Http\Controllers\MonthlyPaymentController;
use App\Http\Controllers\MovingController;
use App\Http\Controllers\NurseDutieController;
use App\Http\Controllers\NurseTypeOfWorkController;
use App\Http\Controllers\NursingSkillController;
use App\Http\Controllers\RecommendationController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SmokingController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\TypeOfWorkController;
use App\Http\Controllers\WorkLocationController;
use App\Http\Controllers\WorkPeriodController;
use App\Http\Controllers\UserLanguagesController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\CredentialController;

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

Route::group([ 'middleware' => 'api', 'prefix' => 'auth'], 
function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);

    Route::group(['middleware' => 'jwt.auth'], function(){
        Route::resource('/credential', CredentialController::class);
        Route::resource('/photo', ImageController::class);
        Route::resource('/language', LanguageController::class);
        Route::resource('/agegroup', AgeGroupController::class);        
        Route::resource('/babysittingdutie', BabysittingDutieController::class);        
        Route::resource('/diagnose', DiagnoseController::class);
        Route::resource('/education', EducationController::class);
        Route::resource('/employment', EmploymentController::class);
        Route::resource('/experience', ExperienceController::class);
        Route::resource('/hourlypayment', HourlyPaymentController::class);
        Route::resource('/housekeeperdutie', HousekeeperDutieController::class);
        Route::resource('/housekeeperpreference', HousekeeperPreferenceController::class);
        Route::resource('/housekeepertypeofwork', HousekeeperTypeOfWorkController::class);
        Route::resource('/joboption', JobOptionController::class);
        Route::resource('/monthlypayment', MonthlyPaymentController::class);        
        Route::resource('/nursedutie', NurseDutieController::class);
        Route::resource('/nursetypeofwork', NurseTypeOfWorkController::class);
        Route::resource('/nursingskill', NursingSkillController::class);
        Route::resource('/recommendation', RecommendationController::class);        
        Route::resource('/schedule', ScheduleController::class);        
        Route::resource('/typeofwork', TypeOfWorkController::class);
        Route::resource('/worklocation', WorkLocationController::class);
        Route::resource('/workperiod', WorkPeriodController::class);
        Route::resource('/userlanguages', UserLanguagesController::class);
    });    
});

Route::resource('/user', UserController::class);
Route::resource('/country', CountryController::class);
Route::resource('/city', CityController::class);
Route::resource('/criminal', CriminalController::class);
Route::resource('/moving', MovingController::class);
Route::resource('/smoking', SmokingController::class);
Route::resource('/alcohol', AlcoholController::class);
Route::resource('/status', StatusController::class);
Route::resource('/religion', ReligionController::class);


