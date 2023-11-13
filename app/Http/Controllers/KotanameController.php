<?php

namespace App\Http\Controllers;



namespace App\Http\Controllers;
use App\Models\Kota;
use Inertia\Inertia;

use Illuminate\Http\Request;


class KotanameController extends Controller
{
    public function tempat()
    {
        $datakota = Kota::all();

        // Return Json Response
        return Inertia::render('Client/SearchTempat',[ 
            'city'=> $datakota]);
    }

    public function makanan()
    {
        $datakota = Kota::all();

        // Return Json Response
        return Inertia::render('Client/SearchMakanan',[ 
            'city'=> $datakota]);
    }
}
