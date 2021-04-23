<!DOCTYPE html>
<html lang="en">

<head>
    <title>Formulir</title>
</head>

<body>
    <form action="{{url('/formulir/proses')}}">
        @csrf
        <input type="text" name="kd_barang" placeholder="Kode barang"> <br>
        <input type="text" name="nm_barang" placeholder="Nama barang"> <br>
        <input type="text" name="hrg_barang" placeholder="Harga barang"> <br>
        <input type="submit" value="Simpan">
    </form>
</body>

</html>