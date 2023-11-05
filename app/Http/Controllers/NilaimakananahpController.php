<?php

namespace App\Http\Controllers;

use App\Models\nilaimakananahp;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NilaimakananahpController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all nilaialt
        $datanilai = nilaimakananahp::select(
            'nilaialt_id',
            'nilaimakananahp.makanan_id',
            'rate_harga',
            'rate_kualitas',
            'rate_gizi',
            'rate_porsi',
            'datamakanan.namamakanan'
        )
        ->join('datamakanan', 'nilaimakananahp.makanan_id', '=', 'datamakanan.makanan_id')
        ->get();
        
        //return view
        return Inertia::render('Admin/Nilaialt/index',[ 
            'nilaialts'=> $datanilai]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function show(nilaimakananahp $nilaimakananahp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function edit(nilaimakananahp $nilaimakananahp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, nilaimakananahp $nilaimakananahp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\nilaimakananahp  $nilaimakananahp
     * @return \Illuminate\Http\Response
     */
    public function destroy(nilaimakananahp $nilaimakananahp)
    {
        //
    }
}
