import { Notyf } from "notyf";

class Notify{
    private notification= new Notyf({duration:4000, position:{x:"center",y:"top"}});

    public success(message:string):void{
        this.notification.success(message);
    }
    public error(err:any):void{
        const message=this.getErrorMessage(err);
        this.notification.error(message);
    }

    // Parser for the backend errors
    private getErrorMessage(err:any):string{
        if(typeof err==="string"){
            return err;
        }
        //axios
        if(typeof err.response?.data === "string"){
            return err.response.data;
        }
        //axios array of errors
        if(Array.isArray(err.response?.data)){
            return JSON.stringify(err.response.data);
        }

        if(typeof err.message === "string"){
            return err.message;
        }
    }
}
const notify=new Notify();
export default notify;