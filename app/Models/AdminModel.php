<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminModel extends Model
{
    protected $table = 'admin_table';
    protected $primaryKey = 'id';
    protected $fillable =[
        'username',
        'password',
        'created_at'
    ];
    use HasFactory;
}
