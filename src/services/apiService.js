import axios from "axios";
import Swal from "sweetalert2";

export const postData = async(controller, obj) => {

    let URL = ''
    switch(process.env.REACT_APP_AMB){
        case 'devMain': URL = 'http://localhost:8000'; break
        case 'devSnd':  URL = 'http://localhost:8001'; break
    }

    try{
        const response = await axios({
            url: URL+'/api/'+controller,
            method: 'POST',
            data: obj,
            headers: {
                'content-type': 'application/json'
            }
        })
        return response
    }catch(e){
        Swal.fire({
            icon: 'error',
            title: '¡ERROR!',
            text: 'Ocurrió un error al intentar contectarse al servidor'
        })
    }
}