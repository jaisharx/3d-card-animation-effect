import styles from './style.module.scss';
import ProductLogo from './adidas.png';
import { useState } from 'react';

function Card() {
    const [transformedStyle, setTransformedStyle] = useState('rotateY(0deg) rotateX(0deg)');

    const handleMouseMove = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        // storing the cords as tranfroms
        setTransformedStyle(`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    };

    return (
        <div
            className={styles.container}
            onMouseMove={handleMouseMove}
            style={{ transform: transformedStyle }}
        >
            <div className={styles.card}>
                <div className={styles.sneaker}>
                    <div className={styles.circle}></div>
                    <img src={ProductLogo} alt="adidas" />
                </div>
                <div className={styles.info}>
                    <h1>Adidas ZX</h1>
                    <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                    <div className={styles.sizes}>
                        <button>39</button>
                        <button>40</button>
                        <button className={styles.active}>42</button>
                        <button>44</button>
                    </div>
                    <div className={styles.purchase}>
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
