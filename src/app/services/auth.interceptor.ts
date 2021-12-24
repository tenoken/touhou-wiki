import { HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    /**
     *
     */
    constructor(private http: HttpClient) {        

    }

    // interceptor(request, next){
    //     console.log(request);
    //     return next.handle();
    // }

    intercept(request: HttpRequest<any>, next: HttpHandler){
        debugger;
        
        var token = localStorage.getItem('token');//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW91a2FpU3RhbGtlcjUiLCJTdG9yZSI6InVzZXIiLCJzdWIiOiI5Njk3NGMyZi01NTRkLTQ1OTYtOTJkMy04OWMwZmYxNWM2YzkiLCJuYmYiOjE2MjU0NTUyOTUsImV4cCI6MTYyNjA2MDA5NSwiaWF0IjoxNjI1NDU1Mjk1fQ.PkvJM3Wf_E7gQbfuTjg_VUR6Iyo8uZXOJw0GSRhhJsk";//localStorage.getItem('token');
        var authResquest = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`),
            // .set('Access-Control-Allow-Origin', "http://localhost:4200/")
            // .set('Content-Type', 'application/json')
            // .set('Set-Cookie', ".AspNetCore.Identity.Application=CfDJ8GVkuTFWSM5ArOVd63ooIvk8QBuRJZVF5j-iu-ikrFjaCiSzsZK73NwdO-P8EPHzUo5XemeJJTl9rxl1lyD42x4Q1b_FPCwcIoaCRU65D4Q-75kHBnb1-jYgVQqaqYEsd1It6jtWhqh7yKV7wcQb-UAwHMN5Qt-STtA9JpCNvouw0k8drWu8USJsW2bPlhuPWcIRFwhCMTidqjZ_4AbApImHO05djGBSc97Okf5s_Il702HWDZqCQTNx1xmUwCa4bFGzXDdRSzcLGllN81AQUW_pq2gldFvZJsidmdq1XzVbVSeQtxbRxvADPsM26l2BNIsilLZfiD5cWON5Wgofff6M0ziT8h2zJkRgATNk26ASKGBioG96Oy7idcTsKGxLSnnUcXVqbhK6BfVX3gBKetdpQU596BL9mzMQyDjrSaIrBoytI2_iRX24etsgh5sE8OpKpkxgH2Vui80hojxDwUiAktT1nrWitf4W7TTSgsgJppfNj1SytcKRQhcm-Wnc3GJGHp4FM8eNGwQodz5WpwXF6L3Ew-t8O_2-R5kAFawu-diw_GTV-irGkPmlX_HfBtZAcIXTfl6eYn2DsbppBNgEZmbTeHLblc_CMbNNL8EuQDOpNNvXNQsrf5w8PRTzPUjPKn58whYdERQ4KzrLuMnS4MiIkmM_VeumM9L-OFEQmuVmRZAy-juIpvrqvCZrY0NoSkVRiy3MOx53QuNgBhuex8geN6ufMtX2YWH4uioU"),
            withCredentials: true
        });
        console.log(authResquest);
        //const options = new HttpHeaders();//{withCredentials: true, 'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}`}
        // options.set('access-control-allow-origin',"http://localhost:4200/");
        // options.set('Content-Type', 'application/json');
        // options.set('Authorization', `Bearer ${token}`);

        // var authResquest = request.clone({
        //     headers: options,
        //     withCredentials: true
        // });

        return next.handle(authResquest);
    }
}