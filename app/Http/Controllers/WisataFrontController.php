<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlacesCollection;
use App\Models\Places;
use Illuminate\Http\Client\Request;
use Inertia\Inertia;
class WisataFrontController extends Controller
{
    //
    public function wisatakota($request)
    {
        //dd($request);

        $places =  new PlacesCollection(Places::where('namakota', $request)->paginate(9));
        //dd($places);
        return Inertia::render('Client/Wisata', [
            'places' => $places
        ]);
    }
}
