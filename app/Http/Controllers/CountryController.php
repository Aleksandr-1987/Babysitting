<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Country::orderBy('created_at', 'desc')->get();
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
        $country = new Country([
            'title' => $request->title
        ]);
                
        $country->save();        
        return response()->json('The country successfully added');
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
        $country = Country::find($id);
        $country->title = $request['title'];       

        $country->save();
        return response()->json(["The country successfully updated"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $country = Country::find($id);
        $country->delete();        

        return response()->json('The country successfully deleted');
    }
}