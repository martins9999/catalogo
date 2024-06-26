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
import { useContext } from 'react';
import { UseContext } from '../../../context/context';
import { ContainerINC, ContainerPIA, ContainerProd, ContentINC, ContentPIA, ContentProd, Img, Info } from '../style.products';
import { BsCart4 } from 'react-icons/bs';
import { CgAdd } from 'react-icons/cg';



const products = [
    {
        imag:CA10230,
        nome:"Arranhador Barril",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"40",l:"40",a:"49",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10230",
        a1:"1x Arranhador Barril",
        a2:"não necessita montagem",
        preco:191.55,
    },
    {
        imag:CA10214,
        nome:"Arranhador Berlim",
        material:"Material: MDF,pelúcia e sisal",
        c:"48",l:"48",a:"120",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10214",
        a1:"1x Arranhador Berlim",
        a2:"1x manual de instruções",
        preco:260.51,
    },
    {
        imag:CA10231,
        nome:"Arranhador Barril Duplo",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"40",l:"40",a:"74",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10231",
        a1:"1x Arranhador Barril Duplo",
        a2:"não necessita montagem",
        preco:237.27,
    },
    {
        imag:CA10216,
        nome:"Arranhador Cairo",
        material:"Material: MDF,pelúcia e sisal",
        c:"34",l:"98",a:"45",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10216",
        a1:"1x Arranhador Cairo",
        preco:204.10,
    },
    {
        imag:CA10224,
        nome:"Arranhador Castelo",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"75",l:"39",a:"104",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10224",
        a1:"1x arranhador castelo para gato",
        preco:360.59,
    },
    {
        imag:CA10222,
       nome:"Arranhador Luanda",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"40",l:"48",a:"120",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10222",
        a1:"1x arranhador Luanda",
        preco:240.67,   
    },
    {
        imag:CA10218,
       nome:"Arranhador Duas Casas",
        material:"Material: MDF,pelúcia e sisal",
        c:"36",l:"55",a:"59",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10218",
        a1:"1x arranhador Duas Casas",
        preco:249,   
    },
    {
        imag:CA10233,
       nome:"Arranhador Castelo com Torre",
        material:"Material: MDF,pelúcia e sisal",
        c:"85",l:"70",a:"115",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10233",
        a1:"1x arranhador Castelo com Torre",
        preco:379.31,   
    },
    {
        imag:CA10232,
       nome:"Arranhador Houston",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"50",a:"80",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10232",
        a1:"1x arranhador Houston",
        preco:142.50,   
    },
   
    
    {
        imag:CA10223,
       nome:"Arranhador Madrid",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"60",l:"40",a:"81",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10223",
        a1:"1x arranhador Madrid",
        preco:203.70,   
    },

    {
        imag:CA10215,
       nome:"Arranhador Montevidéo",
        material:"Material: MDF,pelúcia e sisal",
        c:"35",l:"48",a:"100",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10215",
        a1:"1x arranhador Montevidéo",
        preco:213.36,   
    },

    {
        imag:CA10225,
       nome:"Arranhador Topázio",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"41",a:"58",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10225",
        a1:"1x arranhador Topázio",
        preco:123.84,   
    },
    
    {
        imag:CA10234,
       nome:"Arranhador Irwin",
        material:"Material: MDF,pelúcia e sisal",
        c:"58",l:"48",a:"110",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10234",
        a1:"1x arranhador Irwin",
        preco:353.75,   
    },

    {
        imag:CA10219,
       nome:"Arranhador Vênus",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"30",l:"30",a:"50",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10219",
        a1:"1x arranhador Vênus",
        preco:89.51,   
    },
 
    {
        imag:CA10220,
       nome:"Arranhador Turin",
        material:"Material: MDF,pelúcia e sisal",
        c:"36",l:"55",a:"59",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10220",
        a1:"1x arranhador Turin",
        preco:164.85,   
    },
    
    {
        imag:CA10235,
       nome:"Arranhador Napoles ",
        material:"Material: MDF,pelúcia e sisal",
        c:"58",l:"48",a:"110",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"18cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10235",
        a1:"1x arranhador Napoles",
        preco:459.81,   
    },
    
    {
        imag:CA10236,
       nome:"Arranhador Ninho ",
        material:"Material: MDF,pelúcia e sisal",
        c:"60",l:"60",a:"93",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x28cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"22cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10236",
        a1:"1x arranhador Ninho",
        preco:168.38,   
    },

    {
        imag:CA10981,
       nome:"Arranhador Olimpus ",
        material:"Material: MDF,pelúcia e sisal",
        c:"60",l:"50",a:"120",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"40x30cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"22cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10981",
        a1:"1x arranhador Olimpus",
        preco:283.76,   
    },
 
    {
        imag:CA10213,
       nome:"Arranhador Aconchego ",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"40",a:"60",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"22cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10213",
        a1:"1x arranhador Aconchego",
        preco:139.24,   
    },

    {
        imag:CA10237,
       nome:"Arranhador Kioto ",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"40",a:"60",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10237",
        a1:"1x arranhador Kioto",
        preco:242.28,   
    },

    {
        imag:CA10984,
       nome:"Arranhador Tokyo ",
        material:"Material: MDF,pelúcia e sisal",
        c:"50",l:"50",a:"100",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10984",
        a1:"1x arranhador Tokyo",
        preco:254.90,   
    },

    {
        imag:CA10195,
       nome:"Arranhador Buzios ",
        material:"Material: MDF,pelúcia e sisal",
        c:"50",l:"50",a:"100",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10195",
        a1:"1x arranhador Buzios",
        preco:219.25,   
    },

    {
        imag:CA10238,
       nome:"Arranhador Tunisia ",
        material:"Material: MDF,pelúcia e sisal",
        c:"50",l:"70",a:"114",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10238",
        a1:"1x arranhador Tunisia",
        preco:406.89,   
    },

    {
        imag:CA10239,
       nome:"Arranhador Bangkok ",
        material:"Material: MDF,pelúcia e sisal",
        c:"48",l:"48",a:"100",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10239",
        a1:"1x arranhador Bangkok",
        preco:300.16,   
    },

    {
        imag:CA10240,
       nome:"Arranhador Catedral",
        material:"Material: MDF,pelúcia e sisal",
        c:"48",l:"48",a:"104",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10240",
        a1:"1x arranhador Catedral",
        preco:304.74,   
    },

    {
        imag:CA10241,
       nome:"Arranhador Tirruana",
        material:"Material: MDF,pelúcia e sisal",
        c:"73",l:"48",a:"50",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10241",
        a1:"1x arranhador Tirruana",
        preco:143.40,   
    },

    {
        imag:CA10242,
       nome:"Arranhador Jumping",
        material:"Material: MDF,pelúcia e sisal",
        c:"39",l:"39",a:"114",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10242",
        a1:"1x arranhador Jumping",
        preco:304.74,   
    },

    {
        imag:CA10196,
       nome:"Arranhador Boston",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"40",a:"60",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"30cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10196",
        a1:"1x arranhador Boston",
        preco:141.09,   
    },

    {
        imag:CA10243,
       nome:"Arranhador Lisboa",
        material:"Material: MDF,pelúcia e sisal",
        c:"39",l:"39",a:"114",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10243",
        a1:"1x arranhador Lisboa",
        preco:200.52,   
    },

    {
        imag:CA10244,
        nome:"Arranhador Tunel",
        material:"Material: MDF,pelúcia e sisal",
        c:"35",l:"60",a:"55",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"20cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10244",
        a1:"1x arranhador Tunel",
        preco:158.86,   
    },

    {
        imag:CA10245,
       nome:"Arranhador Casa Coqueiro",
        material:"Material: MDF,pelúcia e sisal",
        c:"40",l:"55",a:"89",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x17cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10245",
        a1:"1x arranhador Casa Coqueiro",
        preco:284.38,   
    },

    {
        imag:CA10246,
       nome:"Arranhador Casinha",
        material:"Material: MDF,pelúcia e sisal",
        c:"35",l:"60",a:"45",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"30cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10246",
        a1:"1x arranhador Casinha",
        preco:182.87,   
    },

    {
        imag:CA10247,
       nome:"Arranhador Barcelona",
        material:"Material: MDF,pelúcia e sisal",
        c:"41",l:"70",a:"112",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10247",
        a1:"1x arranhador Barcelona",
        preco:264.16,   
    },

    {
        imag:CA10248,
       nome:"Arranhador Torre",
        material:"Material: MDF,pelúcia e sisal",
        c:"45",l:"45",a:"91",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"Não possui",
        diametroI:"Diâmetro da cama circular superior: ", dmI:"35*45cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10247",
        a1:"1x arranhador torre",
        preco:127.57,   
    },
    
    {
        imag:CA10192,
        nome:"Arranhador Peruibe",
        material:"Material: MDF,pelúcia e sisal",
        c:"40",l:"40",a:"50",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"40x20cm",
        diametroI:"Diâmetro da cama superior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10192",
        a1:"1x arranhador Peruibe",
        preco:77.48,   
    },
    
    {
        imag:CA10249,
        nome:"Arranhador Escada Com Toca",
        material:"Material: MDF,pelúcia e sisal",
        c:"35",l:"60",a:"45",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"30cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10249",
        a1:"1x arranhador Escada Com Toca",
        preco:256.47,   
    },
    
    {
        imag:CA10193,
        nome:"Arranhador Atalanta",
        material:"Material: MDF,pelúcia e sisal",
        c:"41",l:"70",a:"112",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro do orificio circular do interior: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10193",
        a1:"1x arranhador Atalanta",
        preco:79.13,   
    },
    
    {
        imag:CA10250,
        nome:"Arranhador Nikko",
        material:"Material: MDF,pelúcia e sisal",
        c:"43",l:"39",a:"50",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"Não Possui",
        diametroI:"Diâmetro das bases elevadas: ", dmI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10250",
        a1:"1x arranhador Nikko",
        preco:120.73,   
    },
    
    {
        imag:CA10203,
        nome:"Arranhador Oklahoma",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"50",a:"80",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro da cama suspensa: ", dmI:"30cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10203",
        a1:"1x arranhador Oklahoma",
        preco:200.89,   
    },

    
    {
        imag:CA10251,
        nome:"Bogotá",
        material:"Material: MDF,pelúcia e sisal",
        c:"40",l:"40",a:"60",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"20x20cm",
        diametroI:"Diâmetro da cama suspensa: ", dmI:"30cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10251",
        a1:"1x arranhador Bogotá",
        preco:148.92,   
    },
   
    {
        imag:CA10198,
        nome:"Arranhador Patinhas",
        material:"Material: MDF,pelúcia e sisal",
        c:"40",l:"40",a:"50",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"Não Possui",
        diametroI:"Diâmetro da cama suspensa: ", dmI:"40cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10198",
        a1:"1x arranhador Patinhas",
        preco:73.30,   
    },

    {
        imag:CA10983,
        nome:"Arranhador Chicago",
        material:"Material: MDF,pelúcia e sisal",
        c:"36",l:"60",a:"120",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"Não Possui",
        diametroI:"Diâmetro da cama suspensa: ", dmI:"22cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10983",
        a1:"1x arranhador Chicago",
        preco:183.49,   
    },

    {
        imag:CA10200,
        nome:"Arranhador Burj Khalifa",
        material:"Material: MDF,pelúcia e sisal",
        c:"40",l:"60",a:"170",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"Não Possui",
        diametroI:"Diâmetro da casa superior: ", dmI:"40cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10200",
        a1:"1x arranhador Burj Khalifa",
        preco:540.09,   
    },
    
    {
        imag:CA10985,
        nome:"Arranhador Haren",
        material:"Sem informações",
        c:"xx",l:"xx",a:"xx",
        diametroE:"", dmE:"",
        diametroI:"", dmI:"",
        recomendado:"para gatos adultos e filhotes",
        ref:"10985",
        a1:"1x arranhador Haren",
        preco:674.62,   
    },

    {
        imag:CA10202,
        nome:"Arranhador Londres",
        material:"Material: MDF,pelúcia e sisal",
        c:"120",l:"50",a:"180",
        diametroE:"Diâmetro dos orifícios exteriores: ", dmE:"35cm",
        diametroI:"Diâmetro da toquinha: ", dmI:"40cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10202",
        a1:"1x arranhador Londres",
        preco:1015.85,   
    },
]

function Products001 () {

    

    const { adicionarItem, formatarMoeda, info, setInfo } = useContext(UseContext);

    const newProducts = products.map((it) => {
        return {...it, preco: (it.preco * 0.15 + it.preco).toFixed(2)}
      })

    return (
        <ContainerProd>
            {
                newProducts.map(it => (
                <ContentProd height="390px">
                    <Img display={info}>
                        <img alt="" src={it.imag} />
                    </Img>
                    <ContainerINC display={info}>
                        <img alt="" src={it.imag} />
                        <ContentINC>
                            <b>{it.nome}</b>
                            <b>Código: {it.ref}</b>
                        </ContentINC>
                    </ContainerINC>
                    <Info height="80%" display={info}>
                        <span>{it.material}</span>
                        <span>
                            Medidas: C-{it.c} x L-{it.l} x A-{it.a} (cm)
                        </span>
                        <span>{it.diametroE}{it.dmE}</span>
                        <span>{it.diametroI}{it.dmI}</span>
                        <span>Recomendado: {it.recomendado}</span>
                        <span>{it.a1} {it.a2}</span>
                    </Info>
                    <ContainerPIA>
                        <b>Á Vista por <preco> { formatarMoeda(it.preco * 1) } </preco><frete> + valor do frete</frete></b>
                        <ContentPIA>
                            <button1 onClick={()=>setInfo(!info)}>{info ? 'Ver Foto' : 'Informações'}</button1>
                            <button2 onClick={() => adicionarItem(it.ref, newProducts)}><CgAdd /><BsCart4 /></button2>
                        </ContentPIA>
                    </ContainerPIA>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
}
export default Products001;