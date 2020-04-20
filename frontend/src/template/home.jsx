import React from 'react'
import '../css/home.css'
import reuniao from '../imagens/reuniao.png'
import salinha from '../imagens/salinha.png'
export default props => (
<div>
<section className="track">
    <div className="wrap">

        <div className="track__content">
            <div className="track__text">
                <h2 className="track__title">Maneira Rápida e Prática de Organizar as Suas Reuniões</h2>

                <p></p><p>Baixe o app <strong>Control Room</strong> e acompanhe suas reservas de salas para reuniões!</p><p></p>
                <div className="stores"><a href="https://redirect.ebanx.com/to/phae-Fna8T--7iaRRtDBDKyyUqS9-zoUF5hopajgw5yeLPTpDXxpu7E0rwgAWSOBl0QQjdzOoWyBKLpKjESWdg?utm_source=dobra-ebx-home&utm_medium=email&utm_content=ios">
                        <img src="https://www.ebanx.com/wp-content/themes/ebanx/images/app-store-button.pngAppStore_MX.png" alt=""/>
                    </a>
                    <a href="https://redirect.ebanx.com/to/Z33ZxlU76cnWt6wZ6afYD5JJpS75rGEWeQ8Zw5h_TUtT4dX9SiT632O9I8_XtqeVmwWcs539HfE3EhLj9uK-0flaSS3Hf16AC3fnsLQYcWI?utm_source=dobra-ebx-home&utm_medium=email&utm_content=android">
                        <img src="https://www.ebanx.com/wp-content/themes/ebanx/images/google-play-button.pngPlaystore_MX.png" alt=""/>
                    </a>
                                    </div>

                <span><p>Acesse o app pelo link ao lado <a href="">controlRoom.com</a></p></span>   
            </div>
            <div className="track__mockup">
                <img src={reuniao}alt="Imagem de Reuniao Estilosa"/>
            </div>

            
        </div>

    </div>
</section>



<section className="track" id = "container2">

    <div className="wrap">

        <div className="track__content">
            <div className="track__text">
                <h2 className="track__title">Mantenha um controle eficaz dos seus horários e datas</h2>

                <p></p><p>Com o <strong>Control Room</strong> voê terá acesso as suas salas para reuniões e detalhes sobre as memas, como tamanho e multimidia, além de suas disponibilidades!</p><p></p>
                <div className="stores"><a href="https://redirect.ebanx.com/to/phae-Fna8T--7iaRRtDBDKyyUqS9-zoUF5hopajgw5yeLPTpDXxpu7E0rwgAWSOBl0QQjdzOoWyBKLpKjESWdg?utm_source=dobra-ebx-home&utm_medium=email&utm_content=ios">
                        <img src="https://www.ebanx.com/wp-content/themes/ebanx/images/app-store-button.pngAppStore_MX.png" alt=""/>
                    </a>
                    <a href="https://redirect.ebanx.com/to/Z33ZxlU76cnWt6wZ6afYD5JJpS75rGEWeQ8Zw5h_TUtT4dX9SiT632O9I8_XtqeVmwWcs539HfE3EhLj9uK-0flaSS3Hf16AC3fnsLQYcWI?utm_source=dobra-ebx-home&utm_medium=email&utm_content=android">
                        <img src="https://www.ebanx.com/wp-content/themes/ebanx/images/google-play-button.pngPlaystore_MX.png" alt=""/>
                    </a>
                                    </div>

                <span><p> Rápido e Simples!<a href=""></a></p></span>   
            </div>
            <div className="track__mockup">
                <img src={salinha}alt="Imagem de Reuniao Estilosa"/>
            </div>

            
        </div>

    </div>
</section>
</div>




)