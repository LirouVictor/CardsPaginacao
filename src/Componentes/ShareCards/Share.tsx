import { ShareCardProps } from '../../Interfaces/ShareCardProps';
import './Share.css'; 

const Share: React.FC<ShareCardProps> = ({ logoUrl, longName, symbol, regularMarketPrice, currency }) => {
    return (
        <>
            <div className="container-share"> 
                <h2 className="card-title">{longName}</h2>
                <img src={logoUrl} className="share-card__image" alt="Share logo" />
                <div className="submenu-share">
                    <div className="titulos-share">
                        <span className="campos-share">Símbolo: </span>
                        <span className="campos2-share">{symbol}</span>
                    </div>
                    <div className="titulos-share">
                        <span className="campos-share">Preço: </span>
                        <span className="campos2-share">{regularMarketPrice} {currency}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Share;
