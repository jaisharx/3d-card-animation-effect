import styles from "./style.module.scss";

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.sneaker}>
                    <div className={styles.circle}></div>
                    <img src="/assets/adidas.png" alt="adidas" />
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
