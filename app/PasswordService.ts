export class PasswordSevice{
    changePassword(value):boolean{
        if (value.oldPassword && value.oldPassword !== 'password') {
            return true;                
        }
        else {
            return false;
        }
    }
}