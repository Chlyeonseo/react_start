import { useRef, forwardRef, useImperativeHandle, useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min"
import { AnimatePresence, motion } from "framer-motion";

const Menu = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    const active = { color: "orange" }
    useImperativeHandle(ref, () => {
        return {
            toggle: () => setOpen(!Open),
        }
    })
    return (
        <AnimatePresence>
            {Open && (
                <motion.nav id="mobileGnb"
                    onClick={() => setOpen(!Open)}
                    initial={{ opacity: 0, x: -320 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, x: -320, transition: { duration: 0.5 } }}>
                    <h1>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/img/logo_w.png"} alt="logo" />
                        </Link>
                    </h1>
                    <ul>
                        <li>
                            <NavLink to="/department" activeStyle={active}>
                                Department
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/community" activeStyle={active}>
                                Community
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" activeStyle={active}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/youtube" activeStyle={active}>
                                Youtube
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/location" activeStyle={active}>
                                Location
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/members" activeStyle={active}>
                                Members
                            </NavLink>
                        </li>
                    </ul>
                </motion.nav>
            )}

        </AnimatePresence>
    )
})

export default Menu