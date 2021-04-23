<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index(){
        $nama = "Fendyanto";
        $prodi = "Sistem Informasi";
        $ttl = "22 September 2001";
        $alamat = "Tangerang";
        return view('profileku', compact('nama','prodi','ttl','alamat'));
    }
}
