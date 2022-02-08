import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="fondoApp">
        <div className="nftcard--cont">
          <div className="nftcard">
            <img
              alt=""
              className="nftcard--image"
              src="https://cdn.pixabay.com/photo/2022/01/17/14/09/black-cat-6944832_960_720.png"
            />
            <div className="nftcard-description">
              <h2 className="nft--title">Gatito #335</h2>
              <h6 className="nft--text">
                Our Gatito collection promotes
                <br />
                balances and calm.
              </h6>
              <div className="nft--info--price">
                <div>
                  <img
                    alt=""
                    className="nft--eth--image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/800px-Ethereum-icon-purple.svg.png"
                  />
                  <span className="nft--price"> 0.02 ETH</span>
                </div>
                <div>
                  <img
                    alt=""
                    className="nft--time--image"
                    src="https://images.vexels.com/media/users/3/142363/isolated/preview/76cc00e3681f38ed4956be2394cccd38-reloj-de-pared-plano-de-oficina.png"
                  />
                  <span className="nft--time"> 3 days left</span>
                </div>
              </div>
              <hr className="nft--linespace" size="2px" color="black" />
            </div>
            <div className="nftcard-signature">
              <img
                alt=""
                className="nft--user--signature"
                src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png"
              />
              <span className="nftcard--text--signature">
                Creation by: Julien
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
