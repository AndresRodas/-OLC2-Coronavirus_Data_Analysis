import {URL} from '../config/API'

export class DataService {
    
    async handleSubmit(file){

        const formData = new FormData()
        formData.append('myFile', file)
        
        const res = await fetch(`${URL}/testeo`, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData
        })
        .then(function(resp){
            console.log(resp)
        })
    }
}