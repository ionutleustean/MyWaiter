
import 'rxjs/Rx'
import {Injectable} from 'angular2/core';
import {Auth} from 'backand/Auth';
import {Example} from 'backand/Example';

@Injectable()
export module Backand {

    export var auth:Auth = new Auth();
    export var example:Example = new Example();

}

