import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.column}>
					<Text style={styles.text}>
						{"label"}
					</Text>
					<View style={styles.view}>
						<Text style={styles.text2}>
							{"label"}
						</Text>
					</View>
					<Text style={styles.text3}>
						{"label"}
					</Text>
					<View style={styles.view2}>
						<Text style={styles.text2}>
							{"label"}
						</Text>
					</View>
					<View style={styles.view3}>
						<Text style={styles.text4}>
							{"label"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	column: {
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderWidth: 1,
		paddingVertical: 48,
		paddingHorizontal: 30,
		marginTop: 76,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	text: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
	},
	text2: {
		color: "#D2D2D2",
		fontSize: 14,
	},
	text3: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 6,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	view: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E2E1E5",
		borderRadius: 5,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 16,
		marginBottom: 46,
	},
	view2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#E2E1E5",
		borderRadius: 5,
		borderWidth: 1,
		paddingTop: 18,
		paddingBottom: 100,
		paddingHorizontal: 16,
		marginBottom: 30,
	},
	view3: {
		width: 118,
		height: 48,
		backgroundColor: "#5E5BFF",
		borderColor: "#5E5BFF",
		borderRadius: 5,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 16,
	},
});
