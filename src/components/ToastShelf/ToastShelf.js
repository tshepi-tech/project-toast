import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messageList, handleDismiss }) {
	return (
		<ol className={styles.wrapper}>
			{messageList.map((item) => (
				<li key={item.id} className={styles.toastWrapper}>
					<Toast
						id={item.id}
						handleDismiss={handleDismiss}
						variant={item.variant}
					>
						{item.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
