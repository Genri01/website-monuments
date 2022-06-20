import React from 'react';
import images from '../../assets/images';
import './style.css';

function ProductItem(props) {
    const { photo, name, count, price, mobile, onClick } = props;
    const { arrowl, arrowr, cross } = images;

    return (
        <div className='ProductItemWrapper'>
          {
            mobile ?
            <>
              <div onClick={() => {onClick()}} className='mobileItemTopContainer'>
                <img alt="photoc" className='mobileCrossItem' src={cross} />
              </div>
                <div className='mobileItemBottomContainer'>
                <div className='mobileProductItemPhotoContainer'>
                <img alt="photoc" className='mobilePhotoItem' src={photo} />
                </div>
                <div className='mobileroductItemNameContainer'>
                <div className='nameItem'>{name}</div>
                </div>
                <div className='mobileProductItemCountContainer'>
                <div className='mobileCountItemContainer'>
                <div className='decrementCount'>
                <img src={arrowl} alt="arrowl" width={25}  height={25} />
                </div>
                <input className='resultCount' type='number' step="1" min="1" max="27" id="count_product" name="count_product"></input>
                <div className='incrementCount'>
                <img src={arrowr} alt="arrowr" width={25}  height={25}/>
                </div>
                </div>
                </div>
                <div className='mobileProductItemPriceContainer'>
                <div className='priceItem'>{price}</div>
                </div>
                <div className='mobileProductItemAllPriceContainer'>
                <div className='allpriceItem'>{price * count}</div>
                </div>
              </div>
            </> :
            <>
               <div onClick={() => {onClick()}} className='itemTopContainer'>
                <img alt="photoc" className='mobileCrossItem' src={cross} />
              </div>
              <div className='itemBottomContainer'> 
                <div className='productItemPhotoContainer'>
                  <img alt="photoc" className='photoItem' src={photo} />
                </div>
                <div className='productItemNameContainer'>
                <div className='nameItem'>{name}</div>
                </div>
                <div className='productItemCountContainer'>
                <div className='countItemContainer'>
                <div className='decrementCount'>
                <img src={arrowl} alt="arrowl" width={25}  height={25} />
                </div>
                <input className='resultCount' type='number' step="1" min="1" max="27" id="count_product" name="count_product"></input>
                <div className='incrementCount'>
                <img src={arrowr} alt="arrowr" width={25}  height={25}/>
                </div>
                </div>
                </div>
                <div className='productItemPriceContainer'>
                  <div className='priceItem'>{price}</div>
                </div>
                <div className='productItemAllPriceContainer'>
                  <div className='allpriceItem'>{price * count}</div>
                </div>
              </div>
            </>
          }
        </div>
    );
}

export default ProductItem;
