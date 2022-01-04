import {URL} from '../config/API'

export class DataService {
    
    async Report_1(file, x, y, z, pred, pais){
        const formData = new FormData()
        formData.append('myFile', file)
        const res = await fetch(`${URL}/report1/${x}/${y}/${z}/${pred}/${pais}`, {
            method: 'POST',
            body: formData
        })
        //console.log(await res.json())
        return await res.json()
    }

    async Report_2(file, x, y, z, pred, pais){
        const formData = new FormData()
        formData.append('myFile', file)
        const res = await fetch(`${URL}/report2/${x}/${y}/${z}/${pred}/${pais}`, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData
        })
        return await res.json()
    }

}