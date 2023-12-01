<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('authUser', function(Blueprint $table){
            $table->id();
            $table->string('email')->nullable();
            $table->string('Fname')->nullable();
            $table->string('Lname')->nullable();
            $table->string('address')->nullable();
            $table->string('gender')->nullable();
            $table->string('contact')->nullable();
            $table->string('password')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
