import classes from "./Layout.module.css";
import react from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props) {
	return (
		<>
			<Header />
			<main className={classes.main}>
				{props.children}
			</main>
			<Footer />
		</>
	);
};