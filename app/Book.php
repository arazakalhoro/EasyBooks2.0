<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = array('id', 'title', 'img','description','author', 'price');
}
