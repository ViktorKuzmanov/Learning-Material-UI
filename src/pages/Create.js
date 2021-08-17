import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

export default function Create() {
	return (
		<Container>
			<Typography variant="h6" color="textSecondary" component="h2">
				Create a new note
			</Typography>
			<Button
				type="Submit"
				color="secondary"
				variant="contained"
				onClick={() => {
					console.log("you clicked me");
				}}
			>
				Create
			</Button>
		</Container>
	);
}
