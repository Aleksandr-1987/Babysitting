<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormAgegroup;

class FormAgegroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        for($i = 0; $i < $request[1]; ++$i) {
            $formAgegroup = new FormAgegroup([
                'form_id' => $request[0][$i]["form_id"],
                'agegroup_id' => $request[0][$i]["agegroup_id"]
            ]);                    
            $formAgegroup->save();
        }        
        return $request[1]; 
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