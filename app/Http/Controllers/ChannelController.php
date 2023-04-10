<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Channel;

class ChannelController extends Controller {
    public function index() {
        $channels = Channel::all();
        return response()->json($channels);
    }

    public function store(Request $request) {
        $channels = new Channel([
            'name' => $request -> input('name'),
            'quantity' => $request -> input('quantity'),
            'color' => $request -> input('color'),
 
        ]);
        $channels->save();
        return response()->json('Channel added.');
    }

    public function update(Request $request, $name) {
        $id = Channel::where('name', $name)->first()->id;
        if($id !== null){
            $channels = Channel::find($id);
            $channels->update($request->all());
            return response()->json('Channel edited.');
        }
    }

    public function destroy($name) {
        $id = Channel::where('name', $name)->first()->id;
        if($id !== null){
            $channels = Channel::find($id);
            $channels->delete();
            return response()->json('Channel deleted.');
        }
    }
}
