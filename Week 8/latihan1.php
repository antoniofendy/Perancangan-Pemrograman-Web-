<?php

    class objek {
        function counter(){
            return 5;
        }
        function do_pesan(){
            echo "Cetak Pesan";
        }
    };

    $test = new objek();
    $test.do_pesan();
    echo "<br>";
    echo $test.counter();

?>