'use strict';

// Import Libraries
import React from 'react';
import { Text, View, Modal } from 'react-native';

// Import components
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => { /*Note: onRequestClose is required on Android*/ }}
		>
			<View>
				<CardSection>
					<Text>{children}</Text>
				</CardSection>

				<CardSection>
					<Button onPress={onAccept}>Yes</Button>
					<Button onPress={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

export { Confirm };
