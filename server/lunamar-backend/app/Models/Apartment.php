<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    public $table = "apartment";
    public $timestamps = false;

    use HasFactory;
}
