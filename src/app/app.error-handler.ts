import {HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any){
        let errorMessage: string
        if(error instanceof HttpErrorResponse){
            const body = error.error
            //errorMessage = `Erro ${error.status} ao acessar a URL ${body} - ${error.statusText}`
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else{
            errorMessage = error.Message ? error.Message : error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}