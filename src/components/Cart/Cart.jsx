
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext()

  return (
    <>
      {
        carrito.length === 0
          ? //Si no existen productos en el carrito
          <>
            <h2>Carrito vacio</h2>
            <Link className="nav-link" to={"/"}><button className="btn btn-danger">Continuar comprando</button></Link>
          </>
          : //Si existen productos en el carito
          <div className="container cartContainer">
            <ItemList prods={carrito} plantilla="ItemCart" />
            <div className="divButtons">
              <p className="card-title">Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
              <button className="btn btn-danger mt-3" onClick={() => emptyCart()}>Vaciar Carrito</button>
              <Link className="nav-link" to={"/"}><button className="btn btn-danger mt-3">Continuar comprando</button></Link>
              <Link className="nav-link" to={"/checkout"}><button className="btn btn-danger mt-1">Finalizar Compra</button></Link>
            </div>
          </div>
      }

    </>
  )

}