'use strict';

// Import Libraries
import React from 'react';
import { Text, View, Modal } from 'react-native';

// Import components
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = () => {
	return (
		<Modal>
			<View>
				<CardSection>
					<Text>Are you sure?</Text>
				</CardSection>

				<CardSection>
					<Button>Yes</Button>
					<Button>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

export { Confirm };
