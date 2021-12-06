
import { ThumbUp } from "@mui/icons-material";
import { Notyf } from "notyf";

class NotifyService {

    private notification = new Notyf({ duration: 4000, ripple: true, position: { x: "left", y: "top" }, types: [
        {
          type: 'success',
            background: 'HotPink',
            duration: 4000,
            dismissible: true,
            ripple: true,
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'success'
          }
        },
        {
          type: 'error',
          background: 'darkorange',
          duration: 4000,
            dismissible: true,
            ripple: true,
        },
        ,
        {
          type: 'warning',
          background: 'blue',
          duration: 4000,
            dismissible: true,
            ripple: true,
           
          icon: {
            className: 'material-icons',
            tagName: 'i',
              text: 'warning'
              
              
          }
          
        }
      ] });

    public success(message: string): void {
        this.notification.success(message);
    }

    public error(err: any): void {
        const message = this.getError(err);
        this.notification.error(message);
    }

    private getError(err: any): string {

        if(typeof err === "string") return err;

        if(typeof err.response?.data === "string") return err.response.data; // axios: 401, 403, 500

        if(Array.isArray(err.response?.data)) return err.response.data[0]; // axios: 400 - array of errors

        if(typeof err.message === "string") return err.message;

        return "Some error, please try again.";
    }

}

const notifyService = new NotifyService();

export default notifyService;