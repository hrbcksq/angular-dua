export class AuthService {
    auth(input){
        if (input){
            if (input.username && input.password)
                return true;            
        }
        return false;
    }
}