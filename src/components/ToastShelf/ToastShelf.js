import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messageList, dismiss, variant }) {
	return (
		<ol className={styles.wrapper}>
			{messageList.map((item, index) => (
				<li key={index} className={styles.toastWrapper}>
					<Toast dismiss={dismiss} variant={variant}>
						{item}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
