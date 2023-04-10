<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $table = "channels";
    protected $primaryKey = "id";
    protected $fillable = ["name", "quantity", "color"];

    use HasFactory;
}
