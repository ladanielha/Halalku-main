<?php

    namespace App\Http\Controllers;

    use Illuminate\Support\Facades\Validator;
    use Illuminate\Http\Request;
    use App\Http\Resources\PlacesCollection;
    use App\Http\Resources\KotaCollection;
    use App\Models\Nilaialt;
    use App\Models\Places;
    use App\Models\Kota;
    use Inertia\Inertia;



    class KotaController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $kotas = new KotaCollection(Kota::paginate(20));
            return Inertia::render('Admin/Kota/index', [
                'kota' => $kotas
            ]);
        }

        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            return Inertia::render('Admin/Kota/create');
        }

        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */

        public function store(Request $request)
        {
            //set validation
            $request->validate([
                'namakota' => 'required',
                'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($request->hasFile('gambar')) {
                $gambar = $request->file('gambar');
                $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
                $gambar->move(public_path('uploads'), $gambarName);
            }

            //create kota
            $kota = new Kota([
                'namakota' => $request->input('namakota'),  
                'gambar' => $gambarName, // Store the image path in the database
                
            ]);

            $kota->save();
            //redirect
            return redirect()->route('admin.kota')->with('message', 'Data Kota Berhasil Disimpan!');
        }


        /**
         * Display the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function detail($id)
        {
            $place = Places::find($id);
            return Inertia::render('Client/Wisatadetail', [
                'places' => $place
            ]);
        }

        /**
         * Show the form for editing the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function edit(Places $places, Request $request)
        {
            //dd($request);
            return Inertia::render('Admin/Wisata/edit', [
                'places' => $places->find($request->wisata_id)
            ]);
        }

        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request)
        {

            //$dataplaces = Places::find($request->id);
            $request->validate([
                'namatempat' => 'required',
                'jeniswisata' => 'required',
                'alamat' => 'required',
                'harga' => 'required',
                'jambuka' => 'required',
                'jamtutup' => 'required',
                'desc'  => 'required',
                'gambar'  => 'required',
                'link' => 'required',
            ]);

            //update post
            Places::where('wisata_id', $request->wisata_id)->update([
                'namatempat'     => $request->namatempat,
                'jeniswisata'     => $request->jeniswisata,
                'alamat'   => $request->alamat,
                'harga'   => $request->harga,
                'jambuka'   => $request->jambuka,
                'jamtutup'   => $request->jamtutup,
                'desc'   => $request->desc,
                'gambar'   => $request->gambar,
                'link'   => $request->link,
            ]);

            //redirect
            return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Diupdate!');
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            $places = Places::find($request->wisata_id);
            $places->delete();
            return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Dihapus!');
        }
    }
