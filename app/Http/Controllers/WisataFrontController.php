<?php

namespace App\Http\Controllers;

use App\Models\Places;
use Illuminate\Http\Client\Request;
use Inertia\Inertia;
class WisataFrontController extends Controller
{
    //
    public function wisatakota($request)
    {
        //dd($request);

        $places = Places::where('namakota', $request)->paginate(15);
        return Inertia::render('Client/Wisata', [
            'places' => $places
        ]);
    }
}
