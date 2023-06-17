<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;

class HelpController extends Controller
{
    public function getAdmin ()
    {
        //$admin = User::where('role', 'Администратор')->value('id')->first();
        $admin = User::select('id')->where('role', 'Администратор')->first();
        return $admin;
    }

    public function getMessage_in (Request $request)
    {
        $messages = Message::where([
            ['sender', '=', $request["data"]["admin_id"]],
            ['recipient', '=', $request["data"]["user_id"]],
        ])->get();            
        return $messages;
    }
}
