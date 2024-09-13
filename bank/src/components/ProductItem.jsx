export const ProductItem = ({ src, title, price }) => {

    return (
        <>
          <div>
             <img className="w-56 img" src={src} />
             <h2>{title}</h2>
             <p>{price}</p>
          </div>
        </>
    )
}