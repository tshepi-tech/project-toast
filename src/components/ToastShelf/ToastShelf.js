import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ children, dismiss, variant }) {
	return (
		<ol className={styles.wrapper}>
			<li className={styles.toastWrapper}>
				<Toast dismiss={dismiss} variant={variant}>
					{children}
				</Toast>
			</li>
			<li className={styles.toastWrapper}>
				<Toast dismiss={dismiss} variant={variant}>
					{children}
				</Toast>
			</li>
		</ol>
	);
}

export default ToastShelf;
