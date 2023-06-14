<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NurseTypeOfWork;

class NurseTypeOfWorkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return NurseTypeOfWork::orderBy('created_at', 'desc')->get();
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
        $nurseTypeOfWork = new NurseTypeOfWork([
            'title' => $request->title
        ]);
                
        $nurseTypeOfWork->save();        
        return response()->json('The nurseTypeOfWork successfully added');
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
        $nurseTypeOfWork = NurseTypeOfWork::find($id);
        $nurseTypeOfWork->title = $request['title'];       

        $nurseTypeOfWork->save();
        return response()->json(["The nurseTypeOfWork successfully updated"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $nurseTypeOfWork = NurseTypeOfWork::find($id);
        $nurseTypeOfWork->delete();        

        return response()->json('The nurseTypeOfWork successfully deleted');
    }
}