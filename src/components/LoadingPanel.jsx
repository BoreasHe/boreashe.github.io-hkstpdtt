import { Backdrop, CircularProgress } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";

export const LoadingPanel = (props) => {
    const { open } = props;
    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    id="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ width: "100%", height: "100%", position: "absolute", top: 0, zIndex: 1, borderRadius: 20, overflow: "hidden" }}
                >
                    <Backdrop open={true} style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "#3B373C" }}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </motion.div>
            }
        </AnimatePresence>
    )
}