import { Icon, Slider } from 'react-native-elements';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';

const PracticeSlider = (value) => {
    const [state, setState] = useState(5);
    const [amount, setAmount] = useState(5);
    const [submittedMsg, setSubmittedMsg] = useState('Submitted Amount: ' + amount);

    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 10 }}>
            <Slider
                value={0}
                onSlidingComplete={(amount) => setAmount([amount])}
                minimumValue={20}
                maximumValue={50}
                allowTouchTrack
                step
                trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                thumbStyle={{ height: 10, width: 20, backgroundColor: 'transparent' }}
                thumbProps={{
                    children: (
                        <Icon
                            name="dollar"
                            type='font-awesome'
                            size={20}
                            reverse
                            containerStyle={{ bottom:20, right: 20 }}
                            color='green'
                        />
                    ),
                }}
            />
            <Text>Amount: ${amount}</Text>
        </View>
    );
}

styles = StyleSheet.create ({
    amount: {
        marginTop: 20,
        fontSize: 24
    }
});

export default PracticeSlider;