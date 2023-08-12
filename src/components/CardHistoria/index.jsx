import "./style.css"
import "./responsive.css"

export default function CardHistoria({ img, name, history }) {

    return (
        <div className="card">
            <img src={img} className="card-img-top"/>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{history}</p>
            </div>
        </div>
    )
    
}