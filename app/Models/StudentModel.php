<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentModel extends Model
{

    protected $table = 'student_table';
    protected $primaryKey  = 'id';
    protected $fillable = [
        'student_id',
        'email',
        'full_name',
        'course',
        'year_level'
    ];
    use HasFactory;
}
