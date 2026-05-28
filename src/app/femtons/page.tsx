import type { Metadata } from "next";
import ProjectPage from "@components/layouts/ProjectPage";
import styles from "./page.module.scss";

import Femton1 from "./img/115-1.png";
import Femton2 from "./img/115-2.png";
import Femton3 from "./img/115-3.png";
import Femton4 from "./img/115-4.png";

export const metadata: Metadata = {
    title: "Jacob's femtons",
    description: "Pretty ladies on the internet. Very hot.",
};

export default function FemtonsPage() {
    return (
        <ProjectPage>
            <div>
                <h2>100 femtons</h2>
                <p>Made by Jacob's pet skinwaker.</p>
                <img className={styles.femtonImage} src={Femton1.src} alt="" />
                <img className={styles.femtonImage} src={Femton2.src} alt="" />
                <img className={styles.femtonImage} src={Femton3.src} alt="" />
                <img className={styles.femtonImage} src={Femton4.src} alt="" />
            </div>
        </ProjectPage>
    );
}
