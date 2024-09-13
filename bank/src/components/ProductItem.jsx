import { DollarSign } from "lucide-react"



export const ProductItem = ({ src, title, price }) => {



    return (
        <>
          <div className="flex flex-col gap-2 text-white">
             <img className="w-56 h-56 img" src={src}/>
             <h2 className="font-bold text-xl">{title}</h2>
             <p className="flex items-center gap-4 justify-center">{price} <DollarSign /></p>
          </div>
        </>
    )
}