import React from "react";

import Toast from "../Toast";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [messageList, setMessageList] = React.useState([]);
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [toastOn, setToastOn] = React.useState(false);

	function handleToastDisplay() {
		setToastOn(!toastOn);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const nextMessage = [...messageList, message];
		setMessageList(nextMessage);
		setToastOn(true);
		setMessage("");
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{toastOn && (
				<ToastShelf variant={variant} dismiss={handleToastDisplay}>
					{message}
				</ToastShelf>
			)}
			<form onSubmit={handleSubmit}>
				<div className={styles.controlsWrapper}>
					<div className={styles.row}>
						<label
							htmlFor="message"
							className={styles.label}
							style={{ alignSelf: "baseline" }}
						>
							Message
						</label>
						<div className={styles.inputWrapper}>
							<textarea
								id="message"
								className={styles.messageInput}
								value={message}
								required
								onChange={(event) => {
									setMessage(event.target.value);
								}}
							/>
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label}>Variant</div>
						<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							{VARIANT_OPTIONS.map((option) => (
								<label htmlFor={option} key={option}>
									<input
										type="radio"
										name="selected-variant"
										id={option}
										value={option}
										checked={option === variant}
										onChange={(event) => {
											setVariant(event.target.value);
										}}
									/>
									{option}
								</label>
							))}
						</div>
					</div>

					<div className={styles.row}>
						<div className={styles.label} />
						<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							<Button>Pop Toast!</Button>
						</div>
					</div>
				</div>
			</form>
			{messageList}
		</div>
	);
}

export default ToastPlayground;
