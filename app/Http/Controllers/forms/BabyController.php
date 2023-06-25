<?php

namespace App\Http\Controllers\forms;
use Illuminate\Routing\Controller;

use Illuminate\Http\Request;
use App\Models\forms\Baby;

class BabyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Baby::where('user_id', $request["data"])->first();
        //return $request["data"];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $baby = new Baby([
            'user_id' => $request->user_id,
            'baby_exp' => $request->baby_exp,
            'experience_id' => $request->experience_id,
            'recommendation_id' => $request->recommendation_id,
            'education_about' => $request->education_about,
            'workperiod_id' => $request->workperiod_id,
            'employment_id' => $request->employment_id,
            'childrencount_id' => $request->childrencount_id,                                    
            'children_invalid' => $request->children_invalid,
            'hourpay_id' => $request->hourpay_id,
            'monthpay_id' => $request->monthpay_id,
            'additional' => $request->additional,
            'confirmed' => $request->confirmed,
        ]);                
        $baby->save();                
        return $baby;
        //return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
