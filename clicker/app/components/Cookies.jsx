'use client'
import{ useState,useEffect } from 'react'
import "./style.css"

export default function Cookies() {
const [Cookies,setCookies] = useState(0)

const [costCursor, setCostCursor] = useState(15)
const [countCursor,setCountCursor] = useState(0)

const [costGranma, setCostGranma] = useState(30)
const [countGranma, setCountGranma] = useState(0)

const [costFarm, setCostFarm] = useState(500)
const [countFarm,setCountFarm] = useState(0)

const [boost,setBoost] = useState(1)


useEffect(() => {
const interval = setInterval(() => {
setCookies((prevCookies) => prevCookies + boost);
}, 1000);

return () => clearInterval(interval);
}, [boost]);


return (
<div className='cookie__body'>


    <div className='cookie__upgrade'>
        
    </div>


    <div className='cookie__main'>
        <span className='booster'>Буст в секунду:{boost.toFixed(2)}</span>

        <button className='cooka' onClick={()=>{
            setCookies(Cookies + 1)}}>Печенье:{Cookies.toFixed(2)}
            <img className="w-80"
                src="https://flomaster.top/uploads/posts/2022-08/1660300084_2-flomaster-club-p-kak-narisovat-pechenku-krasivo-2.jpg"
                alt="" />
        </button>
    </div>

    <div className='cookie__store'>
            <span className='text-5xl mb-5'>STORE</span>

        <button className='box' onClick={()=>{
            if(Cookies >= costCursor){
            setCookies(Cookies - costCursor)
            setCostCursor(Math.ceil(costCursor+ (costCursor * 0.5)))
            setBoost(boost +(boost * 0.1))
            setCountCursor(countCursor+1)
            }}}>Купить курсор: {costCursor}
            <img className='w-48' src="https://images.freeimages.com/clg/images/36/367590/hand-cursor-clip-art_f.jpg"
                alt="" />
        </button>
        <span className=''>Курсоров у вас:{countCursor}</span>
        <br />

        <button className='box' onClick={()=>{
            if(Cookies >= costGranma){
            setCookies(Cookies - costGranma)
            setCostGranma(Math.ceil(costGranma+(costGranma * 1.2)))
            setBoost(boost + 1)
            setCountGranma(countGranma+1)
            }}}>Купить бабушку: {costGranma}
            <img className='w-48'
                src="https://img.freepik.com/free-vector/hand-drawn-old-lady-cartoon-illustration_52683-117768.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=sph"
                alt="" />
        </button>
        <span className=''>Бабушек у вас:{countGranma}</span>
        <br />

        <button className='box' onClick={()=>{
            if(Cookies >= costFarm){
            setCookies(Cookies - costFarm)
            setCostFarm(Math.ceil(costFarm+(costFarm * 1.5)))
            setBoost(boost + 8)
            setCountFarm(countFarm+1)
            }}}>Купить ферму: {costFarm}
            <img className='w-48'
                src="https://img.freepik.com/free-vector/hand-drawn-mill-and-farm-landscape-with-fence_23-2147546631.jpg?1&w=1380&t=st=1705403048~exp=1705403648~hmac=a8c77c40722aa9e11de90f40552725fddeb71fd4d0f9e7587eaecfc4a28d1c2a"
                alt="" />
        </button>
        <span className=''>Ферм у вас:{countFarm}</span>
    </div>


</div>
)
}