import { Icon, Slider } from 'react-native-elements';
import { Animated, View, Text } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';

const PracticeSlider = (value) => {
    const [state, setState] = useState(5);
    const [rating, setRating] = useState(5);
    const [submittedMsg, setSubmittedMsg] = useState('Submitted Rating: ' + rating);

    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 10 }}>
            <Slider
                value={0}
                onSlidingComplete={(rating) => setRating([rating])}
                minimumValue={20}
                maximumValue={50}
                allowTouchTrack
                step
                trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                thumbStyle={{ height: 10, width: 20, backgroundColor: 'transparent' }}
                thumbProps={{
                    children: (
                        <Icon
                            name="heartbeat"
                            type='font-awesome'
                            size={20}
                            reverse
                            containerStyle={{ bottom:20, right: 20 }}
                            color='#f50'
                        />
                    ),
                }}
            />
            <Text>Value: {rating}</Text>
        </View>
    );
}


export default PracticeSlider;