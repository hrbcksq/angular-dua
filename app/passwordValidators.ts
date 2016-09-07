import {Control, ControlGroup} from 'angular2/common'

export class PasswordValidators{
    // public static oldPassword(control: Control){
    //     return new Promise((resolve, reject) => {
    //         if (control.value && control.value !== 'password') {
    //             resolve(null);                
    //         }
    //         else {
    //             resolve({'invalid' : true});
    //         }            
    //     });
    // }

    public static matchPassword(controlGroup: ControlGroup){ 
        var newPassword = controlGroup.find("newPassword").value;
        var confirmPassword = controlGroup.find("confirmPassword").value;                    
        if ((newPassword && confirmPassword) && (newPassword !== confirmPassword)){
            return {'match': true};
        } 
        else {
            return null;
        }
    }
}