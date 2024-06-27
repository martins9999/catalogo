import CA10192 from '../../../assets/casas-arranhadores/10192.png';
import CA10193 from '../../../assets/casas-arranhadores/10193.png';
import CA10195 from '../../../assets/casas-arranhadores/10195.png';
import CA10196 from '../../../assets/casas-arranhadores/10196.png';
import CA10198 from '../../../assets/casas-arranhadores/10198.png';
import CA10200 from '../../../assets/casas-arranhadores/10200.png';
import CA10202 from '../../../assets/casas-arranhadores/10202.png';
import CA10203 from '../../../assets/casas-arranhadores/10203.png';
import CA10213 from '../../../assets/casas-arranhadores/10213.png';
import CA10214 from '../../../assets/casas-arranhadores/10214.png';
import CA10215 from '../../../assets/casas-arranhadores/10215.png';
import CA10216 from '../../../assets/casas-arranhadores/10216.png';
import CA10218 from '../../../assets/casas-arranhadores/10218.png';
import CA10219 from '../../../assets/casas-arranhadores/10219.png';
import CA10220 from '../../../assets/casas-arranhadores/10220.png';
import CA10222 from '../../../assets/casas-arranhadores/10222.png';
import CA10223 from '../../../assets/casas-arranhadores/10223.png';
import CA10224 from '../../../assets/casas-arranhadores/10224.png';
import CA10225 from '../../../assets/casas-arranhadores/10225.png';
import CA10230 from '../../../assets/casas-arranhadores/10230.png';
import CA10231 from '../../../assets/casas-arranhadores/10231.png';
import CA10232 from '../../../assets/casas-arranhadores/10232.png';
import CA10233 from '../../../assets/casas-arranhadores/10233.png';
import CA10234 from '../../../assets/casas-arranhadores/10234.png';
import CA10235 from '../../../assets/casas-arranhadores/10235.png';
import CA10236 from '../../../assets/casas-arranhadores/10236.png';
import CA10237 from '../../../assets/casas-arranhadores/10237.png';
import CA10238 from '../../../assets/casas-arranhadores/10238.png';
import CA10239 from '../../../assets/casas-arranhadores/10239.png';
import CA10240 from '../../../assets/casas-arranhadores/10240.png';
import CA10241 from '../../../assets/casas-arranhadores/10241.png';
import CA10242 from '../../../assets/casas-arranhadores/10242.png';
import CA10243 from '../../../assets/casas-arranhadores/10243.png';
import CA10244 from '../../../assets/casas-arranhadores/10244.png';
import CA10245 from '../../../assets/casas-arranhadores/10245.png';
import CA10246 from '../../../assets/casas-arranhadores/10246.png';
import CA10247 from '../../../assets/casas-arranhadores/10247.png';
import CA10248 from '../../../assets/casas-arranhadores/10248.png';
import CA10249 from '../../../assets/casas-arranhadores/10249.png';
import CA10250 from '../../../assets/casas-arranhadores/10250.png';
import CA10251 from '../../../assets/casas-arranhadores/10251.png';
import CA10981 from '../../../assets/casas-arranhadores/10981.png';
import CA10983 from '../../../assets/casas-arranhadores/10983.png';
import CA10984 from '../../../assets/casas-arranhadores/10984.png';
import CA10985 from '../../../assets/casas-arranhadores/10985.png';

import CA10291 from '../../../assets/casas-arranhadores/10291.png';
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { ContainerINC, ContainerPIA, ContainerProd, ContentINC, ContentPIA, ContentProd, Info } from '../style.products';
import { BsCart4 } from 'react-icons/bs';
import { CgAdd } from 'react-icons/cg';



const products = [
    {
        imag:CA10230,
        nome:"Arranhador Barril",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:40)x(L:40)x(A:49)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10230",
        a1:"1x Arranhador Barril",
        a2:"não necessita montagem",
        preco:191.55,
    },
    {
        imag:CA10214,
        nome:"Arranhador Berlim",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:48)x(L:48)x(A:120)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10214",
        a1:"1x Arranhador Berlim",
        a2:"1x manual de instruções",
        preco:260.51,
    },
    {
        imag:CA10231,
        nome:"Arranhador Barril Duplo",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:40)x(L:40)x(A:74)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10231",
        a1:"1x Arranhador Barril Duplo",
        a2:"não necessita montagem",
        preco:237.27,
    },
    {
        imag:CA10216,
        nome:"Arranhador Cairo",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:34)x(L:98)x(A:45)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10216",
        a1:"1x Arranhador Cairo",
        preco:204.10,
    },
    {
        imag:CA10224,
        nome:"Arranhador Castelo",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:75)x(L:39)x(A:104)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10224",
        a1:"1x Arranhador castelo para gato",
        preco:360.59,
    },
    {
        imag:CA10222,
       nome:"Arranhador Luanda",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:40)x(L:48)x(A:120)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10222",
        a1:"1x Arranhador Luanda",
        preco:240.67,   
    },
    {
        imag:CA10218,
       nome:"Arranhador Duas Casas",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:36)x(L:55)x(A:59)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10218",
        a1:"1x Arranhador Duas Casas",
        preco:249,   
    },
    {
        imag:CA10233,
       nome:"Arranhador Castelo com Torre",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:85)x(L:70)x(A:115)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10233",
        a1:"1x Arranhador Castelo com Torre",
        preco:379.31,   
    },
    {
        imag:CA10232,
       nome:"Arranhador Houston",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:50)x(A:80)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10232",
        a1:"1x Arranhador Houston",
        preco:142.50,   
    },
   
    
    {
        imag:CA10223,
       nome:"Arranhador Madrid",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:60)x(L:40)x(A:81)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10223",
        a1:"1x Arranhador Madrid",
        preco:203.70,   
    },

    {
        imag:CA10215,
       nome:"Arranhador Montevidéo",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:35)x(L:48)x(A:100)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10215",
        a1:"1x Arranhador Montevidéo",
        preco:213.36,   
    },

    {
        imag:CA10225,
       nome:"Arranhador Topázio",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:41)x(A:58)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10225",
        a1:"1x Arranhador Topázio",
        preco:123.84,   
    },
    
    {
        imag:CA10234,
       nome:"Arranhador Irwin",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:58)x(L:48)x(A:110)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10234",
        a1:"1x Arranhador Irwin",
        preco:353.75,   
    },

    {
        imag:CA10219,
       nome:"Arranhador Vênus",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        medidas:"Medidas: (C:30)x(L:30)x(A:50)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10219",
        a1:"1x Arranhador Vênus",
        preco:89.51,   
    },
 
    {
        imag:CA10220,
       nome:"Arranhador Turin",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:36)x(L:55)x(A:59)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10220",
        a1:"1x Arranhador Turin",
        preco:164.85,   
    },
    
    {
        imag:CA10235,
       nome:"Arranhador Napoles ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:58)x(L:48)x(A:110)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 18Cm",
        diametroI:"Diâmetro do orificio circular do interior: 18Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10235",
        a1:"1x Arranhador Napoles",
        preco:459.81,   
    },
    
    {
        imag:CA10236,
       nome:"Arranhador Ninho ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:60)x(L:60)x(A:93)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x28Cm",
        diametroI:"Diâmetro do orificio circular do interior: 22Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10236",
        a1:"1x Arranhador Ninho",
        preco:168.38,   
    },

    {
        imag:CA10981,
       nome:"Arranhador Olimpus ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:60)x(L:50)x(A:120)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 40x30Cm",
        diametroI:"Diâmetro do orificio circular do interior: 22Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10981",
        a1:"1x Arranhador Olimpus",
        preco:283.76,   
    },
 
    {
        imag:CA10213,
       nome:"Arranhador Aconchego ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:40)x(A:60)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 22Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10213",
        a1:"1x Arranhador Aconchego",
        preco:139.24,   
    },

    {
        imag:CA10237,
       nome:"Arranhador Kioto ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:40)x(A:60)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10237",
        a1:"1x Arranhador Kioto",
        preco:242.28,   
    },

    {
        imag:CA10984,
       nome:"Arranhador Tokyo ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:50)x(L:50)x(A:100)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10984",
        a1:"1x Arranhador Tokyo",
        preco:254.90,   
    },

    {
        imag:CA10195,
       nome:"Arranhador Buzios ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:50)x(L:50)x(A:100)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10195",
        a1:"1x Arranhador Buzios",
        preco:219.25,   
    },

    {
        imag:CA10238,
       nome:"Arranhador Tunisia ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:50)x(L:70)x(A:114)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10238",
        a1:"1x Arranhador Tunisia",
        preco:406.89,   
    },

    {
        imag:CA10239,
       nome:"Arranhador Bangkok ",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:48)x(L:48)x(A:100)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10239",
        a1:"1x Arranhador Bangkok",
        preco:300.16,   
    },

    {
        imag:CA10240,
       nome:"Arranhador Catedral",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:48)x(L:48)x(A:104)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10240",
        a1:"1x Arranhador Catedral",
        preco:304.74,   
    },

    {
        imag:CA10241,
       nome:"Arranhador Tirruana",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:73)x(L:48)x(A:50)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10241",
        a1:"1x Arranhador Tirruana",
        preco:143.40,   
    },

    {
        imag:CA10242,
       nome:"Arranhador Jumping",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:39)x(L:39)x(A:114)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10242",
        a1:"1x Arranhador Jumping",
        preco:304.74,   
    },

    {
        imag:CA10196,
       nome:"Arranhador Boston",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:40)x(A:60)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 30Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10196",
        a1:"1x Arranhador Boston",
        preco:141.09,   
    },

    {
        imag:CA10243,
       nome:"Arranhador Lisboa",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:39)x(L:39)x(A:114)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10243",
        a1:"1x Arranhador Lisboa",
        preco:200.52,   
    },

    {
        imag:CA10244,
        nome:"Arranhador Tunel",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:35)x(L:60)x(A:55)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 20Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10244",
        a1:"1x Arranhador Tunel",
        preco:158.86,   
    },

    {
        imag:CA10245,
       nome:"Arranhador Casa Coqueiro",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:40)x(L:55)x(A:89)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x17Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10245",
        a1:"1x Arranhador Casa Coqueiro",
        preco:284.38,   
    },

    {
        imag:CA10246,
       nome:"Arranhador Casinha",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:35)x(L:60)x(A:45)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 30Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10246",
        a1:"1x Arranhador Casinha",
        preco:182.87,   
    },

    {
        imag:CA10247,
       nome:"Arranhador Barcelona",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:41)x(L:70)x(A:112)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10247",
        a1:"1x Arranhador Barcelona",
        preco:264.16,   
    },

    {
        imag:CA10248,
       nome:"Arranhador Torre",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:45)x(L:45)x(A:91)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: Não possui",
        diametroI:"Diâmetro da cama circular superior: 35*45Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10247",
        a1:"1x Arranhador torre",
        preco:127.57,   
    },
    
    {
        imag:CA10192,
        nome:"Arranhador Peruibe",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:40)x(L:40)x(A:50)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 40x20Cm",
        diametroI:"Diâmetro da cama superior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10192",
        a1:"1x Arranhador Peruibe",
        preco:77.48,   
    },
    
    {
        imag:CA10249,
        nome:"Arranhador Escada Com Toca",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:35)x(L:60)x(A:45)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 30Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10249",
        a1:"1x Arranhador Escada Com Toca",
        preco:256.47,   
    },
    
    {
        imag:CA10193,
        nome:"Arranhador Atalanta",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:41)x(L:70)x(A:112)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro do orificio circular do interior: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10193",
        a1:"1x Arranhador Atalanta",
        preco:79.13,   
    },
    
    {
        imag:CA10250,
        nome:"Arranhador Nikko",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:43)x(L:39)x(A:50)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: Não Possui",
        diametroI:"Diâmetro das bases elevadas: 35Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10250",
        a1:"1x Arranhador Nikko",
        preco:120.73,   
    },
    
    {
        imag:CA10203,
        nome:"Arranhador Oklahoma",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:30)x(L:50)x(A:80)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro da cama suspensa: 30Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10203",
        a1:"1x Arranhador Oklahoma",
        preco:200.89,   
    },

    
    {
        imag:CA10251,
        nome:"Bogotá",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:40)x(L:40)x(A:60)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 20x20Cm",
        diametroI:"Diâmetro da cama suspensa: 30Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10251",
        a1:"1x Arranhador Bogotá",
        preco:148.92,   
    },
   
    {
        imag:CA10198,
        nome:"Arranhador Patinhas",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:40)x(L:40)x(A:50)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: Não Possui",
        diametroI:"Diâmetro da cama suspensa: 40Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10198",
        a1:"1x Arranhador Patinhas",
        preco:73.30,   
    },

    {
        imag:CA10983,
        nome:"Arranhador Chicago",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:36)x(L:60)x(A:120)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: Não Possui",
        diametroI:"Diâmetro da cama suspensa: 22Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10983",
        a1:"1x Arranhador Chicago",
        preco:183.49,   
    },

    {
        imag:CA10200,
        nome:"Arranhador Burj Khalifa",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:40)x(L:60)x(A:170)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: Não Possui",
        diametroI:"Diâmetro da casa superior: 40Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10200",
        a1:"1x Arranhador Burj Khalifa",
        preco:540.09,   
    },
    
    {
        imag:CA10985,
        nome:"Arranhador Haren",
        material:"",
        medidas:"",
        diametroE:"",
        diametroI:"",
        recomendado:"Sem informações",
        ref:"Código: 10985",
        a1:"1x Arranhador Haren",
        preco:674.62,   
    },

    {
        imag:CA10202,
        nome:"Arranhador Londres",
        material:"Material: MDF,pelúcia e sisal",
        medidas:"Medidas: (C:120)x(L:50)x(A:180)Cm",
        diametroE:"Diâmetro dos orifícios exteriores: 35Cm",
        diametroI:"Diâmetro da toquinha: 40Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10202",
        a1:"1x Arranhador Londres",
        preco:1015.85,   
    },
    {
        imag:CA10291,
        nome:"Canto de Sofá Sisal",
        material:"Cor: Roxo",
        medidas:"Medidas: (C:30)x(L:30)x(A:50)Cm",
        recomendado:"Recomendado: para gatos adultos e filhotes",
        ref:"Código: 10291",
        a1:"1x Canto de sofá roxo",
        preco:39.90,   
    },
]

function Products001 () {

    

    const { adicionarItem, formatarMoeda, info, setInfo } = useContext(UseContext);

    const newProducts = products.map((it) => {
        return {
            ...it, preco: (it.preco * 0.15 + it.preco).toFixed(2),
            precoPix: ((it.preco * 0.15 + it.preco) - (it.preco *  0.15 + it.preco) * 0.05).toFixed(2)
        }
        
    })

    return (
        <ContainerProd>
            {
                newProducts.map(it => (
                <ContentProd height="390px">
                    <ContainerINC info={info}>
                        <img alt="" src={it.imag} />
                        <ContentINC>
                            <b>{it.nome}</b>
                            <b>{it.ref}</b>
                        </ContentINC>
                    </ContainerINC>
                    <Info height="70%" info={info}>
                        <span>{it.material}</span>
                        <span>{it.medidas}</span>
                        <span>{it.diametroE}</span>
                        <span>{it.diametroI}</span>
                        <span>{it.recomendado}</span>
                        <span>{it.a1} {it.a2}</span>
                    </Info>
                    <ContainerPIA info={info}>
                        <b><preco>{ formatarMoeda(it.preco * 1) }</preco> ou
                        no PIX <preco>{formatarMoeda(it.precoPix * 1)}</preco> + valor do frete</b>
                        <ContentPIA>
                            <button1 onClick={()=>setInfo(!info)}>{info ? 'Ver Foto' : 'Informações'}</button1>
                            <button2 onClick={() => adicionarItem(it.ref, newProducts)}>Adicionar <CgAdd /> <BsCart4 /></button2>
                        </ContentPIA>
                    </ContainerPIA>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
}
export default Products001;