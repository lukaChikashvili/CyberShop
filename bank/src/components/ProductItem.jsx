


export const ProductItem = ({ src, title, price }) => {



    return (
        <>
          <div className="flex flex-col gap-2 text-white">
             <img className="w-56 h-56 img" src={src}/>
             <h2 className="font-bold text-xl">{title}</h2>
             <p>{price}</p>
          </div>
        </>
    )
}