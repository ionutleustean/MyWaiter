
import 'rxjs/Rx'
import {Injectable} from 'angular2/core';
import {Auth} from 'backand/Auth';
import {User} from 'backand/User';
import {Example} from 'backand/Example';

@Injectable()
export module Backand {

    export var auth:Auth = new Auth();
    export var user:User = new User();
    export var example:Example = new Example();

}

