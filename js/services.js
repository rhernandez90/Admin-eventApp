function loginService(){

        /*this.setUserData = (data)=>{
            $sessionStorage.userData = data;
        }

        this.getUserData = ()=>$sessionStorage.userData || {} ;

        this.logOut = ()=>{
            delete $sessionStorage.userData;
            $state.go('logins')
        }
        */
        this.getGlobalInfo = ()=>{
            return {
                //url:'http://192.168.0.130/webapi/api'
                url:'http://localhost:50193/api'
                //url:'http://138.197.107.172:3000'
            }
        }

}


angular
.module('inspinia')
.service('loginService', loginService)
