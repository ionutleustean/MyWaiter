import {Cookie} from './CookieService';


export class SocketService {


    public socket;

    public login(appName) {
        var url = 'https://api.backand.com:4000';
        var token = Cookie.getCookie("Authorization");
        
        console.log("test");

        try {
            this.socket = io.connect(url, {'forceNew': true});

            let self = this;
            
            this.socket.on('connect', function () {
                console.log('connected');
                self.socket.emit("login", token, '', appName);
            });

            this.socket.on('disconnect', function () {
                console.log('disconnect');
            });

            this.socket.on('reconnecting', function () {
                console.log('reconnecting');
            });
        }
        catch (e) {
            console.error("error loading socket: ", e)
        }
    };

    public on(eventName, callback) {
        let self = this;

        this.socket.on(eventName, function () {
            var args = arguments;
            callback(self.socket, args);
        });
    };

    public emit(eventName, data, callback) {
        this.socket.emit(eventName, data, function () {
            var args = arguments;
            if (callback) {
                callback(this.socket, args);
            }
        })
    }
}


