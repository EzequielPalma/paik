import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className='navbarCn'>
            <motion.div
                whileHover={{scale: 1.2, rotate: -90 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            >
                <Link
                    href="/"
                    id=""
                >
                    <div className="boton">
                        <img className="imagenBoton" src='../images/Pikota/1.jpg'>
                        </img>
                    </div>
                </Link>
            </motion.div>

            <motion.div
                whileHover={{scale: 1.2, rotate: -90 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            >
                <Link
                    href="/gato"
                    id=""
                >
                    <div className="boton">
                        <img className="imagenBoton" src='../images/Momo/2.jpg'>
                        </img>
                    </div>
                </Link>
            </motion.div>

        </nav>
    )
}
