<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    public $table = "visitor";
    public $timestamps = false;

    use HasFactory;
}
