<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TutorialController extends Controller
{
    public function index(){
        $company = "PT Matrama Manunggaljaya";
        $industry = "Wood";
        $est = "May 19, 2001";
        $loc = "Temanggung regency, Central Java";

        return view('profile', compact('company', 'industry', 'est', 'loc'));
    }

    public function uri($nama){
        return $nama;
    }

    public function input(){
        return view('formulir');
    }

    public function selamat(){
        return 'Selamat datang di websiteku';
    }

    public function proses (Request $request){
        $nm_barang = $request->input('nm_barang');
        $kd_barang = $request->input('kd_barang');
        $hrg_barang = $request->input('hrg_barang');
        return '('.$kd_barang.') '.$nm_barang.' memiliki harga Rp.'.$hrg_barang.' berhasil disimpan';
    }
}
