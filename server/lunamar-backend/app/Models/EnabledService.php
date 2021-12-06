<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnabledService extends Model
{
    public $table = "enabled_service";
    public $timestamps = false;

    use HasFactory;
}
