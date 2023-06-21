<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormAgegroup extends Model
{
    use HasFactory;
    protected $fillable = [ 'form_id', 'agegroup_id' ];
}
