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
import { ButtonsProd, ContainerProd, ContentProd, TextProd } from '../style.products';
import { BsCart4 } from 'react-icons/bs';
import { CgAdd } from 'react-icons/cg';



const products = [
    {
        imag:CA10230,
        nome:"Arranhador Barril",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"40",l:"40",a:"49",
        diametroE:"18cm",
        diametroI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10230",
        a1:"1x Barril para gatos",
        a2:"não necessita montagem",
        preco:191.55,
    },
    {
        imag:CA10214,
        nome:"Arranhador Berlim",
        material:"Material: MDF,pelúcia e sisal",
        c:"48",l:"48",a:"120",
        diametroE:"18cm",
        diametroI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10214",
        a1:"1x Barril para gatos",
        a2:"1x manual de instruções",
        preco:260.51,
    },
    {
        imag:CA10231,
        nome:"Arranhador Barril Duplo",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"40",l:"40",a:"74",
        diametroE:"18cm",
        diametroI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10231",
        a1:"1x Barril para gatos",
        a2:"não necessita montagem",
        preco:237.27,
    },
    {
        imag:CA10216,
        nome:"Arranhador Cairo",
        material:"Material: MDF,pelúcia e sisal",
        c:"34",l:"98",a:"45",
        diametroE:"18cm",
        diametroI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10216",
        preco:204.10,
    },
    {
        imag:CA10224,
        nome:"Arranhador Castelo",
        material:"Material: MDF,pelúcia,sisal e manta de juta",
        c:"75",l:"39",a:"104",
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10218",
        a1:"1x arranhador Duas Casas",
        preco:173.47,   
    },
    {
        imag:CA10233,
       nome:"Arranhador Castelo com Torre",
        material:"Material: MDF,pelúcia e sisal",
        c:"85",l:"70",a:"115",
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"18cm",
        diametroI:"18cm",
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
        diametroE:"20x28cm",
        diametroI:"22cm",
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
        diametroE:"40x30cm",
        diametroI:"22cm",
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
        diametroE:"20x20cm",
        diametroI:"22cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10984",
        a1:"1x arranhador Tokyo",
        preco:254.90,   
    },

    {
        imag:CA10238,
       nome:"Arranhador Tunisia ",
        material:"Material: MDF,pelúcia e sisal",
        c:"50",l:"70",a:"114",
        diametroE:"20x20cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10242",
        a1:"1x arranhador Jumping",
        preco:304.74,   
    },

    {
        imag:CA10195,
       nome:"Arranhador Boston",
        material:"Material: MDF,pelúcia e sisal",
        c:"30",l:"40",a:"60",
        diametroE:"20x20cm",
        diametroI:"30cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10195",
        a1:"1x arranhador Boston",
        preco:141.09,   
    },

    {
        imag:CA10243,
       nome:"Arranhador Lisboa",
        material:"Material: MDF,pelúcia e sisal",
        c:"39",l:"39",a:"114",
        diametroE:"20x20cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"20cm",
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
        diametroE:"20x17cm",
        diametroI:"35cm",
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
        diametroE:"20x20cm",
        diametroI:"30cm",
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
        diametroE:"20x20cm",
        diametroI:"35cm",
        recomendado:"para gatos adultos e filhotes",
        ref:"10247",
        a1:"1x arranhador Barcelona",
        preco:264.16,   
    },
]

function Products001 () {

    const { adicionarItem, formatarMoeda } = useContext(UseContext);

    const newProducts = products.map((it) => {
        return {...it, preco: (it.preco * 0.15 + it.preco).toFixed(2)}
      })

    return (
        <ContainerProd>
            {
                newProducts.map(it => (
                <ContentProd height="380px" heightImg="47%">
                    <img alt="" src={it.imag} />
                    <TextProd height="33%">
                        <b>{it.title}</b>
                        <span><tt>{it.material}</tt></span>
                        <span>Diâmetro dos orificios exteriores: <tt>{it.diametroE}</tt></span>
                        <span><tt>{it.di}</tt></span>
                        <span>{it.dd}</span>
                        <span>Medidas: <tt>{it.medidas}cm</tt></span>
                        <span>Código: <tt>{it.ref}</tt></span>
                    </TextProd>
                    <ButtonsProd>
                        <b>Á Vista por <preco> {formatarMoeda(it.preco)} </preco>  <frete>+ valor do frete</frete></b>
                        <button onClick={() => adicionarItem(it.ref, newProducts)}><CgAdd /><BsCart4 /></button>
                    </ButtonsProd>
                </ContentProd>
                ))
            }
        </ContainerProd>
    )
}
export default Products001;