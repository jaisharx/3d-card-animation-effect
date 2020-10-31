import styles from './style.module.scss';
import ProductLogo from './adidas.png';
import { useState, useRef } from 'react';

function Card() {
    const [transformedStyle, setTransformedStyle] = useState('rotateY(0deg) rotateX(0deg)');

    // additional refs
    const card = useRef(null);
    const title = useRef(null);
    const sneaker = useRef(null);
    const purchase = useRef(null);
    const description = useRef(null);
    const sizes = useRef(null);

    const handleMouseMove = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        // storing the cords as tranfroms
        setTransformedStyle(`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    };

    const handleMouseEnter = () => {
        card.current.style.transition = 'none';

        title.current.style.transform = 'translateZ(150px)';
        sneaker.current.style.transform = 'translateZ(200px) rotateZ(-45deg)';
        description.current.style.transform = 'translateZ(125px)';
        sizes.current.style.transform = 'translateZ(100px)';
        purchase.current.style.transform = 'translateZ(75px)';
    };

    const handleMouseLeave = (e) => {
        card.current.style.transition = 'all 0.5s ease';
        card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;

        title.current.style.transform = 'translateZ(0px)';
        sneaker.current.style.transform = 'translateZ(0px) rotateZ(0deg)';
        description.current.style.transform = 'translateZ(0px)';
        sizes.current.style.transform = 'translateZ(0px)';
        purchase.current.style.transform = 'translateZ(0px)';
    };

    return (
        <div
            className={styles.container}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.card} ref={card} style={{ transform: transformedStyle }}>
                <div className={styles.sneaker}>
                    <div className={styles.circle}></div>
                    <img src={ProductLogo} alt="adidas" ref={sneaker} />
                </div>
                <div className={styles.info}>
                    <h1 ref={title}>Adidas ZX</h1>
                    <h3 ref={description}>
                        FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.
                    </h3>
                    <div className={styles.sizes} ref={sizes}>
                        <button>39</button>
                        <button>40</button>
                        <button className={styles.active}>42</button>
                        <button>44</button>
                    </div>
                    <div className={styles.purchase} ref={purchase}>
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
